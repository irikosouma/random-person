import styled from 'styled-components'
const Wrap = styled.div`
    color: #000;
    height: 100%;
    width: 100%;
    .avatar {
        width: 150px;
        height: 150px;
        position: relative;
        border-radius: 50%;
        padding: 5px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0, .25);
        margin-bottom: 2rem;
    }
    .name, .email, .age, .phone, .address, .password {
        font-size: 18px;
        line-height: 27px;
        color: #324d67;
        font-weight: 400;
        margin: 0;

    }
    span {
        font-size: 28px;
        line-height: 57px;
        font-weight: 400;
        color: #102a42;
        padding-bottom: 20px;
    }
    @media only screen and (min-width: 221px ) {
        span {
            font-size: 28px;
            line-height: 42px;
            font-weight: 400;
            color: #102a42;
            padding-bottom: 20px;
        }
    }
`;
export {Wrap}