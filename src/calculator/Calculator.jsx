import React, { useRef, useEffect, useState } from 'react';

import './cal_style.css';

import { btns, BTN_ACTIONS } from './btnConfig';
import NavHome from '../component/NavHome';
import Footer from '../component/Footer';

const Calculator = () => {

    const btnsRef = useRef(null);
    const expRef = useRef(null);

    const [expression, setExpression] = useState('');

    useEffect(() => {
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));
        btns.forEach(e => e.style.height = e.offsetWidth + 'px');
    }, []);

    const btnClick = (item) => {
        const expDiv = expRef.current;

        if (item.action === BTN_ACTIONS.THEME) document.body.classList.toggle('dark');

        if (item.action === BTN_ACTIONS.ADD) {
            addAnimSpan(item.display);

            const oper = item.display !== 'x' ? item.display : '*';
            setExpression(expression + oper);
        }

        if (item.action === BTN_ACTIONS.DELETE) {
            expDiv.parentNode.querySelector('div:last-child').innerHTML = '';
            expDiv.innerHTML = '';

            setExpression('');
        }

        if (item.action === BTN_ACTIONS.PERCENT) {
            let output = Number(expression) / 100;
            console.log(output);
            setExpression(output)
            expDiv.innerHTML = output;
        }

        if (item.action === BTN_ACTIONS.DEL) {
            let output = expression.split('');
            output.pop()
            let result = output.join('');
            console.log(result)

            expDiv.innerHTML = result;
            setExpression(result)
        }

        if (item.action === BTN_ACTIONS.CALC) {
            if (expression.trim().length <= 0) return;

            expDiv.parentNode.querySelector('div:last-child').remove();

            const cloneNode = expDiv.cloneNode(true);
            expDiv.parentNode.appendChild(cloneNode);

            const transform = `translateY(${-(expDiv.offsetHeight + 10) + 'px'}) scale(0.4)`;

            try { 

                let res = eval(expression);

                setExpression(res.toString());
                setTimeout(() => {
                    cloneNode.style.transform = transform;
                    expDiv.innerHTML = '';
                    addAnimSpan(Math.floor(res * 100000000) / 100000000);
                }, 200);
            } catch {
                setTimeout(() => {
                    cloneNode.style.transform = transform;
                    cloneNode.innerHTML = 'Syntax err';
                }, 200);
            } finally {
                console.log('calc complete');
            }
        }
    }

    const addAnimSpan = (content) => {
        const expDiv = expRef.current;
        const span = document.createElement('span');

        span.innerHTML = content;
        span.style.opacity = '0';
        expDiv.appendChild(span);

        const width = span.offsetWidth + 'px';
        span.style.width = '0';

        setTimeout(() => {
            span.style.opacity = '1';
            span.style.width = width;
        }, 100);
    }

    return (
        <>
            <div className='all'>
                <NavHome />
                <div className="calculator">
                    <div className="calculator__result">
                        <div ref={expRef} className="calculator__result__exp"></div>
                        <div className="calculator__result__exp"></div>
                    </div>
                    <div ref={btnsRef} className="calculator__btns">
                        {
                            btns.map((item, index) => (
                                <button
                                    key={index}
                                    className={item.class}
                                    onClick={() => btnClick(item)}
                                >
                                    {item.display}
                                </button>
                            ))
                        }
                    </div>

                </div>
                </div>
                <br/>
                <Footer />
            

        </>

    );
}

export default Calculator;