import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

function Contact() {
    useGSAP(() => {
        document.fonts.ready.then(() => {
            const titleSplit = new SplitText("#contactTitle", { type: "words" });
    
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top center"
                },
                ease: "power1.inOut"
            })
            
            timeline.from(titleSplit.words, {
                opacity: 0,
                yPercent: 100,
                stagger: 0.02
            })
            .fromTo("#contact h3, #contact p", {
                opacity: 0, yPercent: 100
            }, { opacity: 1, yPercent: 0, stagger: 0.02})
            .fromTo("#footer-drinks", {
                x: 300
            }, {
                x: 0,
                duration: 1,
                ease: "power1.inOut"
            })
            .to("#f-right-leaf", {
                y: "-50", duration: 1, ease: "power1.inOut"
            })
            .to("#f-left-leaf", {
                y: "50", duration: 1, ease: "power1.inOut"
            }, "<")
            
        })
    }, []);

    return (
        <footer id="contact">
            <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf' />
            <img src="/images/footer-left-leaf.png" alt="leaf-left" id='f-left-leaf' />

            <div className="content">
                <h2 id='contactTitle'>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Raq Blvd, #404, Los Angeles, CA 90210</p>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p>(555) 987-6543</p>
                    <p>hello@mocktail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a key={social.name} href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.name}>
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="drink-img">
                    <img src="/images/footer-drinks.png" alt="footer-drinks" id='footer-drinks' />
                </div>
            </div>
        </footer>
    )
}

export default Contact
