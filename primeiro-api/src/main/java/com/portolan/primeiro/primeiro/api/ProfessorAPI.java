package com.portolan.primeiro.primeiro.api;

import com.portolan.primeiro.primeiro.application.service.ProfessorService;
import com.portolan.primeiro.primeiro.domain.model.Aluno;
import com.portolan.primeiro.primeiro.domain.model.Professor;
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
@RequestMapping("/api/professor")
public class ProfessorAPI extends GumgaAPI<Professor, Long> {
    
    @Autowired
    public ProfessorAPI(GumgaService<Professor, Long> service) {
        super(service);
    }
    /*
    @Override
    @GumgaSwagger
    @Transactional
    @ResponseStatus(value = HttpStatus.OK)
    @ApiOperation(value = "delete", notes = "Deleta objeto com o id correspondente.")
    @RequestMapping(value = {"/{id}"}, method = {RequestMethod.DELETE})
    @GumgaOperationKey(value = "BILETADA",basic = true)
    public RestResponse<Professor> delete(Long l) {
        return super.delete(l);
    }  */
}
