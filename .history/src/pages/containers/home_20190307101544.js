import React, { Component } from 'react';
import Categories from '../../categories/components/categories';
import HandleError from '../../error/containers/handle-error';
import Modal from '../../widgets/components/modal';
import ModalContainer from '../../widgets/containers/modal-container';
import HomeLayout from '../components/home-layout';
import Related from '../components/related';

class Home extends Component {
    state = {
        modalVisible: false,
        handleError: false,
    }

    handleOpenModal = () => {
        this.setState({
            modalVisible: true,
        });
    }

    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related></Related>
                    <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                Esto es un portal
                    </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

export default Home;
