/**
 * Componente mais simples. Só retorna um parágrafo com escrito Hello World.
 * 
 * NOTA: dentro do return só pode haver um elemento. Caso queira colocar mais
 *  parágrafos, vou precisar colocar eles dentro - por exemplo - um tag <div>
 *  mas também posso usar um tag vazio (veja Fragment)
 * 
 */



function HelloWorld() {
    return(
        <p>Hello World</p>
    );
}

export default HelloWorld;