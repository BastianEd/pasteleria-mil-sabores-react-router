import * as React from "react";
import TextField from "@mui/material/TextField";

export interface InputProps {
    label: string;
    name: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    fullWidth?: boolean;
}

/**
 * Input base de la app.
 * Envuelvo el TextField de MUI para:
 * - Usar siempre el mismo estilo de input.
 * - No tener que configurar el TextField a mano en cada formulario.
 */
const Input: React.FC<InputProps> = ({
                                         label,
                                         name,
                                         type = "text",
                                         value,
                                         onChange,
                                         required = false,
                                         fullWidth = true,
                                     }) => {
    return (
        <TextField
            // Label es el texto que aparece arriba del input
            label={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            fullWidth={fullWidth}
            margin="normal"
            // Podrías agregar aquí props extra de MUI si los necesitas después
        />
    );
};

export default Input;
