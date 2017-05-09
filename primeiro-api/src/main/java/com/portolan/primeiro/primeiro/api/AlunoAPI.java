package com.portolan.primeiro.primeiro.api;

import com.portolan.primeiro.primeiro.application.service.AlunoService;
import com.portolan.primeiro.primeiro.domain.model.Aluno;
import com.wordnik.swagger.annotations.ApiOperation;
import io.gumga.annotations.GumgaSwagger;
import io.gumga.application.GumgaService;
import io.gumga.presentation.GumgaAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMethod;
import io.gumga.presentation.RestResponse;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.validation.BindingResult;
import io.gumga.application.GumgaTempFileService;
import io.gumga.domain.domains.GumgaImage;
import io.gumga.presentation.GumgaAPI;
import io.gumga.security.GumgaOperationKey;
import org.springframework.web.bind.annotation.RequestMapping;
import java.io.IOException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/aluno")
public class AlunoAPI extends GumgaAPI<Aluno, Long> {

  
    @Autowired
    public AlunoAPI(GumgaService<Aluno, Long> service) {
        super(service);
    }
   
}
