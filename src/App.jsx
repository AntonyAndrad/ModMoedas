// Importa os hooks useState e useEffect do React e a biblioteca axios para fazer requisições HTTP
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

// Define o componente CurrencyConverter
const CurrencyConverter = () => {
  // Define os estados do componente
  const [amount, setAmount] = useState(1); // Valor inicial de 1 para a quantia
  const [fromCurrency, setFromCurrency] = useState('USD'); // Moeda de origem, inicialmente USD
  const [toCurrency, setToCurrency] = useState('EUR'); // Moeda de destino, inicialmente EUR
  const [exchangeRates, setExchangeRates] = useState({}); // Objeto para armazenar taxas de câmbio
  const [convertedAmount, setConvertedAmount] = useState(null); // Armazena o valor convertido

  // Hook useEffect para buscar as taxas de câmbio quando o componente é montado
  useEffect(() => {
    // Função assíncrona para buscar as taxas de câmbio
    const fetchExchangeRates = async () => {
      try {
        // Faz uma requisição para a API de taxas de câmbio
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        // Atualiza o estado com as taxas de câmbio recebidas
        setExchangeRates(response.data.rates);
      } catch (error) {
        // Log de erro no console caso a requisição falhe
        console.error('Error fetching exchange rates:', error);
      }
    };

    // Chama a função para buscar as taxas de câmbio
    fetchExchangeRates();
  }, []); // Dependências vazias significam que o efeito será executado apenas uma vez quando o componente for montado

  // Hook useEffect para calcular o valor convertido sempre que a quantia ou as moedas mudarem
  useEffect(() => {
    // Função para calcular a conversão de moeda
    const calculateConversion = () => {
      // Verifica se as taxas de câmbio para as moedas selecionadas estão disponíveis
      if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
        // Calcula a taxa de conversão
        const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        // Atualiza o estado com o valor convertido
        setConvertedAmount(amount * rate);
      }
    };

    // Chama a função de cálculo
    calculateConversion();
  }, [amount, fromCurrency, toCurrency, exchangeRates]); // O efeito é executado sempre que amount, fromCurrency, toCurrency ou exchangeRates mudam

  // Renderiza o componente
  return (
    <div>
      <h1>Conversor de Moeda</h1>
      <div>
        <label>
          Valor:
          <input
            type="number"
            value={amount} // O valor do input é vinculado ao estado amount
            onChange={(e) => setAmount(e.target.value)} // Atualiza o estado amount quando o valor do input muda
          />
        </label>
      </div>
      <div>
        <label>
          De:
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {/* Cria uma lista de opções para a moeda de origem com base nas chaves de exchangeRates */}
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Para:
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {/* Cria uma lista de opções para a moeda de destino com base nas chaves de exchangeRates */}
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <h2>Resultado:</h2>
        <p>
          {/* Exibe o valor convertido ou uma mensagem de "Calculando..." se o valor ainda não foi calculado */}
          {amount} {fromCurrency} = {convertedAmount ? convertedAmount.toFixed(2) : 'Calculando...'} {toCurrency}
        </p>
      </div>
    </div>
  );
};

// Exporta o componente para que possa ser usado em outras partes da aplicação
export default CurrencyConverter