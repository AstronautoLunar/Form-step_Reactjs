import { Link } from 'react-router-dom';
import { useForm } from '../../context/FormContext';
import { HeaderContainer, List, Item, Text } from './styles';

function Header() {
    const { stateForm } = useForm();
    return (
        <HeaderContainer>
            <nav>
                <List>
                    {stateForm.map(({ textLink, idScreen }) => (
                        <Item key={idScreen}>
                            <Text>
                                <Link to={`/:${idScreen}`}>{textLink} </Link>
                            </Text>
                        </Item>
                    ))}
                </List>
            </nav>
        </HeaderContainer>
    );
}

export default Header;
