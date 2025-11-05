import './slide.css'

import list_img from './list_img.json';
function Slide(){
    return(
        <div className="slide">
            <div className="SlideAffiche">
                <img src={list_img[0].imageUrl} alt={list_img[0].name}/>
            </div>
            
            <div className="slideNav">
                    <div className="slideNavImg">
                     {list_img.map((img)=><img id ={img.id}src={img.imageUrl} alt={img.name} onClick={SetImg}/>)}
                    </div>
                    <div className="slideButton">
                        <button className='buttonSlidePrev' onClick={slidePrev} >&lt;</button>
                        <button className='buttonSlideNext' onClick={slideNext}>&gt;</button>
                    </div>
            </div>
        </div>
    );
}
function SetImg(e){
    const img = document.querySelector('.SlideAffiche img');
    img.src = e.target.src;
    img.alt = e.target.alt;
}
function slideNext(){
    const Imgs = document.querySelector('.slideNavImg');
    Imgs.scrollLeft +=100;


}
function slidePrev(){
    const Imgs = document.querySelector('.slideNavImg');
    Imgs.scrollLeft -=100;
}
export default Slide;
