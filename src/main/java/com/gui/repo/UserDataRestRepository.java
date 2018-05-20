/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gui.repo;

import com.gui.repo.enitity.User;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 *
 * @author raja
 */
@RepositoryRestResource(path = "user", collectionResourceRel = "user")
public interface UserDataRestRepository extends PagingAndSortingRepository<User, Long> {

}
