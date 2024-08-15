import * as C from "@chakra-ui/react"

const FormEndereco = () => {
    return(
        <C.VStack spacing={5}>
            <C.Input type="text" placeholder="insira o Cep"/>
            <C.Input type="text" placeholder="Insira o Bairro"/>
            <select placeholder="Insira a UF">
  <option value="">Selecione um estado</option>
  <option value="AC">Acre (AC)</option>
  <option value="AL">Alagoas (AL)</option>
  <option value="AP">Amapá (AP)</option>
  <option value="AM">Amazonas (AM)</option>
  <option value="BA">Bahia (BA)</option>
  <option value="CE">Ceará (CE)</option>
  <option value="DF">Distrito Federal (DF)</option>
  <option value="ES">Espírito Santo (ES)</option>
  <option value="GO">Goiás (GO)</option>
  <option value="MA">Maranhão (MA)</option>
  <option value="MT">Mato Grosso (MT)</option>
  <option value="MS">Mato Grosso do Sul (MS)</option>
  <option value="MG">Minas Gerais (MG)</option>
  <option value="PA">Pará (PA)</option>
  <option value="PB">Paraíba (PB)</option>
  <option value="PR">Paraná (PR)</option>
  <option value="PE">Pernambuco (PE)</option>
  <option value="PI">Piauí (PI)</option>
  <option value="RJ">Rio de Janeiro (RJ)</option>
  <option value="RN">Rio Grande do Norte (RN)</option>
  <option value="RS">Rio Grande do Sul (RS)</option>
  <option value="RO">Rondônia (RO)</option>
  <option value="RR">Roraima (RR)</option>
  <option value="SC">Santa Catarina (SC)</option>
  <option value="SP">São Paulo (SP)</option>
  <option value="SE">Sergipe (SE)</option>
  <option value="TO">Tocantins (TO)</option>
</select>

           
        </C.VStack>
    )
}

export default FormEndereco