import styled from 'styled-components';
const Wrap = styled.div`
    .bgc-black {
        background-color: #2C2E31;
    }
    .bgc-white {
        background-color: #F1F5F8;
    }
    .wrap-info {
            position: relative;
            text-align: center;
            background-color: #fff;
            padding : 1.5rem;
            width: 90vw;
            max-width: 730px;
            margin: -200px auto 0;
            box-shadow: 0 5px 15px rgb(0 0 0 / 20%);   
            border-radius: 5px;
            :before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 130px;
                background-color: #F1F5F8;
                border-bottom: 1px solid rgba(0,0,0,0.25);
                border-radius: 5px 5px 0 0;
            }
            .wrap-person {
                color: #000;
            }
        }
    @media only screen and (min-width: 50px) {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-rows: 50vh 50vh;
        .block {
            min-height: 50vh;
        }
        .wrap-btn-icon {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            .name, .email, .phone, .address , .password, .age {
                border: none;
                appearance: none;
                font-size: 1.5rem;
                background-color: transparent;
            }
            .icon-style {
                fill: #617d98;
                :hover {
                    transition: all .3s linear;
                    fill: #49a6e9;
                }
            }
        }
        .btn-random {
            width: 110px;
            height: 40px;
            background-color: #49a6e9;
            text-transform: uppercase;
            border-radius: 2px;
            border: none;
            appearance: none;
            letter-spacing: 2px;
            font-size: 14px;
            margin: 20px 0 5px 0;
            color: #fff;
            :hover {
                transition: all .3s ease-in-out;
                background-color: #102a42;
                color: #49a6e9;
            }
        }
        .wrap-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    @media only screen and (min-width: 221px) {
        .btn-random {
            width: 150px;
            height: 30px;
            background-color: #49a6e9;
            text-transform: uppercase;
            border-radius: 2px;
            border: none;
            appearance: none;
            letter-spacing: 2px;
            font-size: 14px;
            margin: 20px 0 5px 0;
            color: #fff;
            :hover {
                transition: all .3s ease-in-out;
                background-color: #102a42;
                color: #49a6e9;
            }
        }
    }
    @media only screen and (min-width: 229px) {
        .wrap-info {
            display: block;
        }
    }
    @media only screen and (min-width: 799px) {
        .wrap-btn-icon {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            .name, .email, .phone, .address , .password, .age {
                transition: all .3s linear;
                font-size: 2rem;
            }
            .icon-style {
                fill: #617d98;
                :hover {
                    transition: all .3s linear;
                    fill: #49a6e9;
                }
            }
        }
    }
`;
export {Wrap}

    /* width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr;
    .bgc-black {
        background-color: #2C2E31;
    }
    .block {
        min-height: 50vh;
    }
    .bgc-white {
        background-color: #F1F5F8;
    }
    .wrap-info {
        position: relative;
        text-align: center;
        background-color: #fff;
        padding : 1.5rem;
        width: calc(90vw - 3rem);
        max-width: 730px;
        margin: -200px auto 0;
        box-shadow: 0 5px 15px rgb(0 0 0 / 20%);   
        border-radius: 5px;
        :before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 130px;
            background-color: #F1F5F8;
            border-bottom: 1px solid rgba(0,0,0,0.25);
            border-radius: 5px 5px 0 0;
        }
        .wrap-person {
            color: #000;
        }
    }
    .wrap-btn-icon {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        .name, .email, .phone, .address , .password, .age {
            border: none;
            appearance: none;
            font-size: 2rem;
            background-color: transparent;
        }
        .icon-style {
            fill: #617d98;
            :hover {
                transition: all .3s linear;
                fill: #49a6e9;
            }
        }
    }
    .btn-random{
        width: 150px;
        height: 30px;
        background-color: #49a6e9;
        text-transform: uppercase;
        border-radius: 2px;
        border: none;
        appearance: none;
        letter-spacing: 2px;
        font-size: 14px;
        margin: 20px 0 5px 0;
        color: #fff;
        :hover {
            transition: all .3s ease-in-out;
            background-color: #102a42;
            color: #49a6e9;
        }
    } */