const Button = {
        height: '50px',
        width: '528px',
        'border-radius': '12px',
        display: 'flex',
        flexdirection: 'column',
        'border-style': 'hidden',
        background: '#6b6b6b',
        alignitems: 'center',
        textalign: 'center',
        borderradius: '12px',
        'background-color': 'rgba(107, 107, 107, 0.30000001192092896)',
        justifycontent: 'center',
        'text-decoration': 'none',
};

const Label = {
    /* Label */

    width: '100%',
    height: '55%',

    /* Other/Button */
    'font-family': 'var(--font-Roboto)',
    'font-style': 'normal',
    'font-weight': 500,
    'font-size': '14px',
    'line-height': '20px',
    /* identical to box height, or 143% */
    display: 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'justify-content': 'center',
    /* Text/🌝 Light/On-Color */
    color: '#FFFFFF',


    /* Inside auto layout */
    flex: 'none',
    order: 0,
    'align-self': 'stretch',
    'flex-grow': 0

};


function SignUpButton(){
    return (
        <button style={Button}><h1 style={Label}>회원가입 완료</h1></button>
    );
}

export default SignUpButton;