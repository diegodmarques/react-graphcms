import { LogoFooter } from "./FooterLogo";

export function Footer(){
    return(
        <footer className="w-full flex py-6 items-center justify-between border-gray-600 text-sm text-gray-200 border-t">
            <div className="flex items-center gap-6">
                <LogoFooter />
                <span>Rocketseat - todos os direitos reservados</span>
            </div>
            <span>Politicas de privacidade</span>
        </footer>
    )
}