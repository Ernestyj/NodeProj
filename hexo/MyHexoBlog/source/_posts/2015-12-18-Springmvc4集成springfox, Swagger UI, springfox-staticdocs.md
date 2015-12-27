



title: Springmvc4集成springfox, swagger UI, springfox-staticdocs
date: 2015-12-18 22:44:47
categories: 
- spring
tags: 
- java
- spring
- web
- doc
<!--updated: 2015-12-18 23:40:47-->
---

## Springmvc4集成springfox, swagger UI, springfox-staticdocs

下面给出相关组件的链接：
Swagger: http://swagger.io/
Springfox: http://springfox.github.io/springfox/
Asciidoctor: http://asciidoctor.org/

Swagger可以用来生成RESTful API文档，Springfox由Swagger-springmvc演变而来。Asciidoctor是将AsciiDoc转为HTML, PDF等文档的转换工具。

### Springmvc3集成Swagger-springmvc, Swagger-ui
Swagger-springmvc适用于与Springmvc3的集成，具体方法参考：
https://github.com/springfox/springfox/blob/v1.0.2/README.md
https://github.com/albertchendao/demos/tree/master/java/spring/HelloWorld-MVC-Swagger
集成 后可以通过手动拷贝的方式引入Swagger-ui，
访问http://host:port/projectName/swagger/index.html 即可看到Swagger-ui。

### Springmvc4集成springfox
查看最新的[Springfox Reference Documentation](http://springfox.github.io/springfox/docs/current/)，这里给出的说明对初学者来说可能较难上手。可以参考其给出的[springfox-demos](https://github.com/springfox/springfox-demos)，按照示例在Springmvc4中引入springfox。

Maven依赖：
```maven
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.2.2</version>
        </dependency>
```
配置：这里采用java注解方式配置，当然也可以用xml配置。用xml配置的话，@ComponentScan和@EnableWebMvc注解去掉，同时在xml中引入<mvc:annotation-driven/>和其bean的声明。
里面相关代码和注解具体的含义可以参考[Springfox Reference Documentation](http://springfox.github.io/springfox/docs/current/)。
集成之后，访问/api-docs可以看到json数据。

注意：整个工程编码方式应该设置为UTF-8，否则生成的json数据中，中文会出现乱码。如果不行，参考[Swagger+Spring mvc生成Restful接口文档](http://www.cnblogs.com/yuananyun/p/4993426.html) 自定义MappingJackson2HttpMessageConverter 来设置转换字符编码等。

java注解方式配置如下：

```java
import com.google.common.base.Predicate;
import com.google.common.collect.Sets;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.AuthorizationScopeBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.BasicAuth;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

import static com.google.common.base.Predicates.or;
import static com.google.common.collect.Lists.newArrayList;
import static springfox.documentation.builders.PathSelectors.regex;

/**
 * Created by DCLab on 12/17/2015.
 */
@Configuration
@EnableWebMvc //NOTE: Only needed in a non-springboot application
@EnableSwagger2 //Enable swagger 2.0 spec
@ComponentScan("com.eugene.controller")
public class SpringfoxDocConfig {

    @Bean
    public Docket petApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("full-petstore")
                .apiInfo(apiInfo())
                .forCodeGeneration(true)
                .select()
                .paths(petstorePaths())
                .build();
    }
    private Predicate<String> petstorePaths() {
        return or(
                regex("/api/pet.*"),
                regex("/api/user.*"),
                regex("/api/store.*")
        );
    }

    @Bean
    public Docket adminApi(){
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("admins")
                .apiInfo(apiInfo())
                .forCodeGeneration(true)
                .select()
                .paths(regex("/admins.*"))
                .build();
    }


    @Bean
    public Docket userApi() {
        AuthorizationScope[] authScopes = new AuthorizationScope[1];
        authScopes[0] = new AuthorizationScopeBuilder()
                .scope("read")
                .description("read access")
                .build();
        SecurityReference securityReference = SecurityReference.builder()
                .reference("test")
                .scopes(authScopes)
                .build();

        ArrayList<SecurityContext> securityContexts = newArrayList(SecurityContext.builder().securityReferences
                (newArrayList(securityReference)).build());
        return new Docket(DocumentationType.SWAGGER_2)
                .securitySchemes(newArrayList(new BasicAuth("test")))
                .securityContexts(securityContexts)
                .groupName("user")
                .apiInfo(apiInfo())
                .select()
                .paths(userOnlyEndpoints())
                .build();
    }
    private Predicate<String> userOnlyEndpoints() {
        return new Predicate<String>() {
            @Override
            public boolean apply(String input) {
                return input.contains("user");
            }
        };
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("Springfox REST API")
                .description("Descriptions.")
                .termsOfServiceUrl("http://springfox.io")
                .contact("springfox")
                .license("Apache License Version 2.0")
                .licenseUrl("https://github.com/springfox/springfox/blob/master/LICENSE")
                .version("2.0")
                .build();
    }

    @Bean
    public Docket configSpringfoxDocket_all() {
        return new Docket(DocumentationType.SWAGGER_2)
                .produces(Sets.newHashSet("application/json"))
                .consumes(Sets.newHashSet("application/json"))
                .protocols(Sets.newHashSet("http", "https"))
                .forCodeGeneration(true)
                .select().paths(regex(".*"))
                .build();
    }

    @Bean
    public Docket configSpringfoxDocket_foo() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("foo")
                .produces(Sets.newHashSet("application/json"))
                .consumes(Sets.newHashSet("application/json"))
                .protocols(Sets.newHashSet("http", "https"))
                .forCodeGeneration(true)
                .select().paths(regex(".*foo.*"))
                .build();
    }
}
```

### Springmvc4集成swagger UI
如果项目使用了Spring Boot，集成swagger UI可以参考[Springfox Reference Documentation](http://springfox.github.io/springfox/docs/current/)，非常简单。如果没有使用Spring Boot，需要增加一些额外配置。建议参考官方给出的[springfox-demos](https://github.com/springfox/springfox-demos) 来集成swagger UI。

Maven依赖：
```maven
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.2.2</version>
        </dependency>
```
由于springfox-swagger-ui采用webjar的方式引入页面，需要在sping xml中配置静态资源访问（使用了Spring Boot则不需要）：
```xml
<!-- Enables swgger ui-->
    <mvc:resources mapping="swagger-ui.html" location="classpath:/META-INF/resources/"/>
    <mvc:resources mapping="/webjars/**" location="classpath:/META-INF/resources/webjars/"/>
```
集成swagger UI之后访问http://localhost:8080/swagger-ui.html 即可看到swagger界面。

注意：swagger UI基于/api-docs中提供的数据，若设置springfox时没有在/api-docs中添加相关json数据，swagger UI编译验证过程会报错。验证需要引入commons-lang3包，没有的需要添加依赖。
```maven
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.4</version>
        </dependency>
```


### Springmvc4集成springfox-staticdocs
使用springfox-staticdocs可以生成asciidoc和markdown文档。

同样，如果项目使用了Spring Boot，集成swagger UI可以参考[Springfox Reference Documentation](http://springfox.github.io/springfox/docs/current/)，也可以参考 https://swagger2markup.readme.io/docs/springfox-staticdocs 。

如果没有使用Spring Boot，则在使用Spring Test时修改一下相关代码和注解即可。写好测试代码后，运行单元测试即可生成asciidoctor和markdown文档。Spring Unit Test代码如下：
```java
import com.eugene.service.AdminService;
import io.github.robwin.markup.builder.MarkupLanguage;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import springfox.documentation.staticdocs.Swagger2MarkupResultHandler;

@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(value = {"file:src/main/webapp/WEB-INF/mvc-dispatcher-servlet.xml",
        "file:src/main/resources/applicationContext.xml"})
public class Swagger2MarkupTest{

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private AdminService adminService;

    private MockMvc mockMvc;

    @Before
    public void setUp() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
    }

    @Test
    public void convertSwaggerToAsciiDoc() throws Exception {
        this.mockMvc.perform(MockMvcRequestBuilders.get("/v2/api-docs")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(Swagger2MarkupResultHandler.outputDirectory("src/docs/asciidoc/generated").build())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

    @Test
    public void convertSwaggerToMarkdown() throws Exception {
        this.mockMvc.perform(MockMvcRequestBuilders.get("/v2/api-docs")
                .accept(MediaType.APPLICATION_JSON))
                .andDo(Swagger2MarkupResultHandler.outputDirectory("src/docs/markdown/generated")
                        .withMarkupLanguage(MarkupLanguage.MARKDOWN).build())
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
```


### AsciiDoc转为HTML, PDF等格式文档

Maven项目中可以集成asciidoctor maven插件，将AsciiDoc转为HTML, PDF等格式文档。可以参考[asciidoctor-maven-examples](https://github.com/asciidoctor/asciidoctor-maven-examples) 来集成asciidoctor maven插件。集成之后，执行mvn install可以根据指定位置的AsciiDoc文件来生成HTML或PDF文档。

Maven插件设置时的参数含义参考[asciidoctor-maven-plugin](https://github.com/asciidoctor/asciidoctor-maven-plugin) 。下面给出的配置包含asciidoc-to-html和asciidoc-to-pdf，其中转成pdf对中文字符的支持不完善，部分中文字符会消失。

注意：配置插件时，请不要省略jruby-complete和asciidoctorj的依赖（虽然demo中提示可以省略），否则执行mvn install时很可能会报错。此外，jruby-complete的版本也应注意，尽量使用最新版。

Maven插件配置如下：
```maven
<plugin>
   <groupId>org.asciidoctor</groupId>
   <artifactId>asciidoctor-maven-plugin</artifactId>
   <version>1.5.2</version>
   <dependencies>
       <dependency>
           <groupId>org.asciidoctor</groupId>
           <artifactId>asciidoctorj-pdf</artifactId>
           <version>1.5.0-alpha.10.1</version>
       </dependency>
       <dependency>
           <groupId>org.jruby</groupId>
           <artifactId>jruby-complete</artifactId>
           <version>9.0.0.0.rc1</version>
       </dependency>
       <dependency>
           <groupId>org.asciidoctor</groupId>
           <artifactId>asciidoctorj</artifactId>
           <version>1.5.3.2</version>
       </dependency>
   </dependencies>

   <configuration>
       <sourceDirectory>src/docs/asciidoc</sourceDirectory>
       <outputDirectory>target/docs/asciidoc</outputDirectory>
   </configuration>

   <executions>
       <execution>
           <id>asciidoc-to-html</id>
           <phase>generate-resources</phase>
           <goals>
               <goal>process-asciidoc</goal>
           </goals>
           <configuration>
               <backend>html5</backend>
               <doctype>book</doctype>
               <sourceHighlighter>coderay</sourceHighlighter>
               <attributes>
                   <imagesdir>./images</imagesdir>
                   <toc>left</toc>
                   <icons>font</icons>
                   <sectanchors>true</sectanchors>
                   <!-- set the idprefix to blank -->
                   <idprefix/>
                   <idseparator>-</idseparator>
                   <docinfo1>true</docinfo1>
               </attributes>
           </configuration>
       </execution>
       <!--asciidoc生成pdf对中文字符的支持不完善-->
       <!--<execution>-->
           <!--<id>generate-pdf-doc</id>-->
           <!--<phase>generate-resources</phase>-->
           <!--<goals>-->
               <!--<goal>process-asciidoc</goal>-->
           <!--</goals>-->
           <!--<configuration>-->
               <!--<backend>pdf</backend>-->
               <!--&lt;!&ndash; Since 1.5.0-alpha.9 PDF back-end can use 'rouge' as well as 'coderay' source highlighting &ndash;&gt;-->
               <!--<sourceHighlighter>rouge</sourceHighlighter>-->
               <!--<attributes>-->
                   <!--<icons>font</icons>-->
                   <!--<pagenums/>-->
                   <!--<toc/>-->
                   <!--<idprefix/>-->
                   <!--<idseparator>-</idseparator>-->
               <!--</attributes>-->
           <!--</configuration>-->
       <!--</execution>-->
   </executions>
</plugin>
```


