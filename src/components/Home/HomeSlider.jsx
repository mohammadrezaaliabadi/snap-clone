import React, { useState } from 'react'
import './Home.css';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

const animation = { duration: 5000, easing: (t) => t }
export default () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
        initial:0,
        loop:true,
        drag: false,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
          created() {
            setLoaded(true)
        },      
      breakpoints:{
        '(min-width: 500px)': {
            loop: false,
          },
      }
    },
    [
        (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
    ]
  )

  return (
    <>
        <div ref={sliderRef} className="keen-slider home_slider_container">
            <div className="keen-slider__slide number-slide1"><img className='home_slider_item' src='./home_slider/fa.jpeg'/></div>
            <div className="keen-slider__slide number-slide2"><img className='home_slider_item' src='./home_slider/fa2.jpg'/></div>
            <div className="keen-slider__slide number-slide3"><img className='home_slider_item' src='./home_slider/fa3.jpg'/></div>
            <div className="keen-slider__slide number-slide4"><img className='home_slider_item' src='./home_slider/fa4.jpg'/></div>
            <div className="keen-slider__slide number-slide5"><img className='home_slider_item' src='./home_slider/fa5.jpg'/></div>
            <div className="keen-slider__slide number-slide6"><img className='home_slider_item' src='./home_slider/fa6.jpg'/></div>
            <div className="keen-slider__slide number-slide7"><img className='home_slider_item' src='./home_slider/fa7.jpg'/></div>
        </div>
        {loaded && instanceRef.current && (
            <div className='dots_container'>
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                        <button
                            key={idx}
                            onClick={() => {
                            instanceRef.current?.moveToIdx(idx)
                            }}
                            className={"dot" + (currentSlide === idx ? " active" : "")}
                        ></button>
                        )
                    })}
                </div>
            </div>

      )}
    </>

  )
}