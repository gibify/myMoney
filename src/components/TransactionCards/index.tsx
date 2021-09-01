import Image from 'next/image';

import { Container } from './styles';

export function TransactionCards() {
    return (
        <Container>
           <div className="card">
            <header>
                <span>Income</span>
                <Image 
                src="/icons/income-icon.svg"
                width={28}
                height={28}
                />
            </header>
                <h3>R$ 1.200,00</h3>
           </div>

           <div className="card">
            <header>
                <span>Outcome</span>
                <Image 
                src="/icons/outcome-icon.svg"
                width={28}
                height={28}
                />
            </header>
                <h3>R$ 1.800,00</h3>
           </div>

           <div className="card" id="total">
            <header>
                <span>Total</span>
                <Image 
                src="/icons/total-icon.svg"
                width={28}
                height={28}
                />
            </header>
                <h3>R$ 1.200,00</h3>
           </div>
        </Container>
    )
}