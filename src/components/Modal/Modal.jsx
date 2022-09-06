import { Component } from 'react'
import {ModalStyles, Overlay} from './Modal.styled'

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleOverlayClck = e => {
        // console.log(e.target);
        // console.log(e.currentTarget);
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    }
    
    render() {
        return (
            <Overlay onClick={this.handleOverlayClck}>
                <ModalStyles>
                    {this.props.children}
                </ModalStyles>
            </Overlay>
        );
    }
}