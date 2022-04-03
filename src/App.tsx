import { useState } from 'react';
import AppRoutes from './routes/app.routes';
import GlobalStyle from './styles/global';
import light from './styles/theme/light';
import dark from './styles/theme/dark';
import { ThemeProvider } from 'styled-components';
import { FormProvider } from './context/FormContext';

function App() {
    const [theme, setTheme] = useState(light);
    return (
        <ThemeProvider theme={theme}>
            <FormProvider>
                <GlobalStyle />
                <AppRoutes />
            </FormProvider>
        </ThemeProvider>
    );
}

export default App;
