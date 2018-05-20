/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gui.controller;

import java.util.Locale;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author raja
 */
@RestController
public class HelloWorldController {
    
    
    @Autowired
    MessageSource messageSource; 
    
    @GetMapping(path = "/hello-world")
    public String helloWorld(){
       return  messageSource.getMessage("good.morning.message", null, LocaleContextHolder.getLocale());
    }
}
