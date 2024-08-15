import * as C from "@chakra-ui/react";

const FormProjeto = () => {
    return (
        <C.VStack spacing={5} align="start">
            <C.Input type="text" placeholder="Projeto" />
            <C.Input type="text" placeholder="Área" />
            <C.Input type="text" placeholder="Escola" />
            <C.Input type="text" placeholder="Coordenador/Professor" />
            
            <C.Box>
                <C.Text fontWeight="bold" mb={2}>Selecione as opções:</C.Text>
                <C.Checkbox>CETAF</C.Checkbox>
                <C.Checkbox>CETCC</C.Checkbox>
                <C.Checkbox>CEFEM</C.Checkbox>
            </C.Box>
        </C.VStack>
    );
}

export default FormProjeto;
