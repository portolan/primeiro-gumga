package com.portolan.primeiro.primeiro.application.repository;

import com.portolan.primeiro.primeiro.domain.model.Pessoa;
import io.gumga.domain.repository.GumgaCrudRepository;


public interface PessoaRepository extends GumgaCrudRepository<Pessoa, Long>  {
    
    
}
