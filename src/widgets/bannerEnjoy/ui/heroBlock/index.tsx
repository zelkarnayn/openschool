import hero from './static/Hero.png'
function HeroBlock() {
    return (
        <div style={{marginTop: '50px', position: 'absolute', right: "-45px"}}>
            <img src={hero} alt={'Топовое блюдо'}/>
        </div>
    );
}

export default HeroBlock;