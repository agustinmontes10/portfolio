import '@/styles/input.scss'

interface CustomInputProps {
    type?: 'text' | 'date' | 'email',
    placeholder: string,
    textarea?: boolean,
}

const CustomInput: React.FC<CustomInputProps> = ({type = 'text', placeholder, textarea}) => {
    return (
        <div className="nebula-input">
            { textarea 
                ? <textarea required name="text" autoComplete="off" className="input" placeholder={ placeholder } /> 
                : <input required type={ type } name="text" autoComplete="off" className="input" placeholder={ placeholder } />
            }
            <div className="nebula-particle" style={{ "--x": 0.2, "--y": -0.4, "--delay": "0.1s" } as React.CSSProperties}></div>
            <div className="nebula-particle" style={{ "--x": 0.5, "--y": -0.2, "--delay": "0.3s" } as React.CSSProperties}></div>
            <div className="nebula-particle" style={{ "--x": 0.3, "--y": 0.3, "--delay": "0.5s" } as React.CSSProperties}></div>
            <div className="nebula-particle" style={{ "--x": 0.7, "--y": 0.1, "--delay": "0.2s" } as React.CSSProperties}></div>
            <div className="nebula-particle" style={{ "--x": 0.1, "--y": -0.7, "--delay": "0.4s" } as React.CSSProperties}></div>
            <div className="nebula-particle" style={{ "--x": 0.6, "--y": 0.4, "--delay": "0.6s" } as React.CSSProperties}></div>
        </div>

    )
}

export default CustomInput;