import * as C from "@chakra-ui/react"
import { useState } from 'react';

const FormPessoal = () => {
    const [gender, setGender] = useState("");

    return(
        <C.VStack spacing={5} align="start">
            <C.Input type="email" placeholder="Insira seu e-mail"/>
            <C.Input type="text" placeholder="Insira seu nome"/>
            <C.Input type="text" placeholder="Insira seu CPF"/>
            <C.Input type="text" placeholder="Insira seu telefone"/>
            
            <C.Box>
                <C.Text mb={2}>Selecione seu gênero:</C.Text>
                <C.RadioGroup onChange={setGender} value={gender}>
                    <C.Stack spacing={4} direction="row">
                        <C.Radio value="masculino">Masculino</C.Radio>
                        <C.Radio value="feminino">Feminino</C.Radio>
                    </C.Stack>
                </C.RadioGroup>
            </C.Box>
        </C.VStack>
    )
}

export default FormPessoal
