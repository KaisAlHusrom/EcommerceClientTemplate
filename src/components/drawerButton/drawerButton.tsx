import React from 'react'
import { ButtonProps } from '../ui/button/button'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui'
import { LucideIcon } from 'lucide-react'

interface DrawerButtonProps extends ButtonProps {
    children: React.ReactNode,
    footer: React.ReactNode,
    variance: 'icon' | 'normal',
    icon?: LucideIcon,
    title?: string,
    drawerTitle?: string,
    drawerDescription?: string,
}

const DrawerButton = (props: DrawerButtonProps) => {
    const {
        children,
        footer,
        variance = 'normal',
        icon: Icon,
        title,
        drawerTitle,
        drawerDescription,
        ...buttonProps
    } = props


    
    return (
        <Drawer direction='right'  >
            <DrawerTrigger asChild>
                {variance === 'icon' && Icon ? (
                    <Button variant="ghost" size="icon">
                        <Icon size={24} />
                    </Button>
                ) : (
                    <Button {...buttonProps}>{title}</Button>
                )}
            </DrawerTrigger>
            <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
                {
                    drawerTitle && <DrawerTitle>{drawerTitle}</DrawerTitle>
                }
                {
                    drawerDescription && <DrawerDescription>{drawerDescription}</DrawerDescription>
                }
            </DrawerHeader>
            
            {
                children
            }
            <DrawerFooter>
                {footer}
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </div>
            </DrawerContent>
            </Drawer>
    )
}

export default DrawerButton
