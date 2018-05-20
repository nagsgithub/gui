package com.gui;

import com.gui.repo.UserDataRestRepository;
import java.util.Locale;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.AcceptHeaderLocaleResolver;

@SpringBootApplication
public class GuiApplication {

    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    UserDataRestRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(GuiApplication.class, args);
    }
    
    @Bean
    public LocaleResolver localeResolver(){
        AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
        localeResolver.setDefaultLocale(Locale.US);
        
        return localeResolver;
    }
}
