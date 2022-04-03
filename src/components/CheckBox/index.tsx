import { ReactNode, useState } from 'react';
import { TypeCheckBox } from '../../types/TypeCheckBox';

import { Check, Container } from './styles';

function CheckBox({ label, checked = false }: TypeCheckBox) {
    const [stateChecked, setStateChecked] = useState(checked);
    return (
        <Container
            control={<Check size="medium" />}
            label={label}
            onChange={() => setStateChecked(!stateChecked)}
            checked={stateChecked}
        />
    );
}

/**
 * A prop "checked" está entrando em um certo
 * conflito com o "defaultChecked" do componente
 * Check dentro da prop "control" do componente Container
 * por isso o defaultChecked foi removido do componente Check
 */

export default CheckBox;
