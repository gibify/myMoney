import Image from 'next/image';
import { Button } from '../Button/Index';
import Logo from '../../../public/logo-text.svg';

import { Container } from './styles';

export function Header() {
    return (
        <Container>
            <div className="content wrapper">
               <Image 
                    src={Logo}
                    alt="Logo"
               />
               <Button />
            </div>
        </Container>
    )
}