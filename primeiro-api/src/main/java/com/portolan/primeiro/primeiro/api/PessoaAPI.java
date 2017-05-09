
package com.portolan.primeiro.primeiro.api;

import com.portolan.primeiro.primeiro.domain.model.Pessoa;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/pessoa")
public class PessoaAPI extends GumgaAPI<Pessoa, Long> {
    
    @Autowired
    public PessoaAPI(GumgaService<Pessoa, Long> service) {
        super(service);
    }    
    
}
