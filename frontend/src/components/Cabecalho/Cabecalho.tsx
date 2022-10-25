import { CabecalhoContainer, Logo } from "./Cabecalho.style"

const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src="/imagens/myteacher.png"></Logo>
            </div>
            <p>Encontre o Professor Perfeito</p>
        </CabecalhoContainer>
    )
}

export default Cabecalho