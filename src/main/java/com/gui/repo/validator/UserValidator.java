///*
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */
//package com.gui.repo.validator;
//
//import com.gui.repo.enitity.User;
//import org.springframework.validation.Errors;
//import org.springframework.validation.Validator;
//
///**
// *
// * @author raja
// */
//public class UserValidator implements Validator {
//
//    @Override
//    public boolean supports(Class<?> clazz) {
//        return User.class.equals(clazz);
//    }
//
//    @Override
//    public void validate(Object obj, Errors errors) {
//        User user = (User) obj;
//        if (checkInputString(user.getFirstName())) {
//            errors.rejectValue("name", "name.empty");
//        }
//        if (checkInputString(user.getLastName())) {
//            errors.rejectValue("email", "email.empty");
//        }
//    }
//
//    private boolean checkInputString(String input) {
//        return (input == null || input.trim().length() == 0);
//    }
//
//}
