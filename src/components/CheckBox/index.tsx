import { ReactNode, useState } from 'react';
import { TypeCheckBox } from '../../types/TypeCheckBox';

import { Check, Container } from './styles';

function CheckBox({ label, checked = false }: TypeCheckBox) {
    const [stateChecked, setStateChecked] = useState(checked);
    return (
        <Container
            control={<Check defaultChecked size="medium" />}
            label={label}
            checked={stateChecked}
            onChange={() => setStateChecked(!stateChecked)}
        />
    );
}

export default CheckBox;
