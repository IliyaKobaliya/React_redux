import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

class TermsConditions extends React.Component {
    state = {
        open: false,
        scroll: 'paper',
    };

    handleClickOpen = scroll => () => {
        this.setState({ open: true, scroll });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const companyName = `KobaliyaSoft`;
        return (
            <div>
                <Typography variant="caption" gutterBottom>
                    Нажав на кнопку "Создать" , Вы примите <span  style={{color: `#3F51B5`, borderBottom:`1px solid #3F51B5`, cursor:`pointer`}} onClick={this.handleClickOpen('paper')}> услови и положения сайта</span>
                </Typography>
                {/*<Button onClick={this.handleClickOpen('body')}>scroll=body</Button>*/}
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                >
                    <DialogTitle id="scroll-dialog-title">Условия и положения сайта</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            `Данный веб-сайт обеспечивается и управляется компанией {companyName} (здесь и далее:“{companyName}” или “мы”).

                            Данная политика конфиденциальности распространяется на все личные сведения, собранные, поддерживаемые или используемые компанией {companyName}.

                            Компания {companyName} собирает личные данные посетителей данного веб-сайта, которые регистрируют сведения о себе. Дополнительно мы собираем некоторые защищенные личные сведения, предоставленные нашими клиентами, которые предоставляют данную информацию на этом веб-сайте.

                            Если Вы предоставляете нам свои личные сведения, то с Вашего согласия компания {companyName} будет использовать данные сведения для того, чтобы информировать Вас о наших специальных мероприятиях или рекламных кампаниях, зарегистрирует Вас на нашем веб-сайте и будет оказывать услуги на нашем веб-сайте. В противном случае мы сможем использовать данные сведения только для того, чтобы проанализировать нашу деятельность и улучшить обслуживание.

                            Мы будем посылать Вам уведомления или сообщения по электронной почте только в том случае, если от Вас будет получено явное разрешение на это путем размещения адреса Вашей электронной почты.

                            Компания {companyName} не продает, не сдает в аренду и не раскрывает имена своих клиентов, их почтовые адреса, адреса электронной почты или любые другие личные сведения какой-либо организации, не входящей в состав {companyName}. Компания {companyName} может передавать сведения о клиенте внутри компании для того, чтобы информировать Вас о нашей продукции, которая может Вас заинтересовать. Более того, для поддержания нашего веб-сайта, управления базой данных, распространения базы адресов электронной почты и обеспечения связи с клиентами, компания {companyName} может привлекать третьи стороны. При необходимости третьи стороны могут обрабатывать личные сведения, которые Вы нам предоставляете, на исключительное усмотрение компании {companyName}. Однако мы не предоставляем права кому-либо из данных поставщиков услуг на какое-либо использование Ваших сведений, кроме указанных. Мы не раскрываем Ваши сведения третьим сторонам, кроме тех случаев, когда к этому нас обязывает законодательство, либо в связи с правовым притязанием или иском.

                            Компания {companyName} использует должные меры безопасности для защиты конфиденциальной информации, которую Вы нам предоставляете. Несмотря на то, что компания {companyName} предпринимает должные действия для защиты данных личных сведений от несанкционированного доступа, использования или раскрытия, необходимо понимать, что любая передача данных посредством сети Интернет не может гарантировать защиту от доступа незаконных получателей и не накладывает на нас ответственность за любое нарушение безопасности.

                            Если Вы зарегистрированы на сайте компании {companyName} и желаете, чтобы Вас удалили из нашего маркетингового списка, пожалуйста, посетите нашу страницу с контактами и выберите пункт «удалить из списка рассылки».

                            Получая доступ и используя веб-сайт {companyName}, Вы соглашаетесь с тем, что мы собираем, используем и раскрываем Ваши сведения, как это описано выше в данной политике конфиденциальности. {companyName} сохраняет за собой право вносить изменения в политику безопасности или инструкции.

                            В случае любых несовпадений между этой версией и версией на английском языке, английская версия имеет преимущество.

                            При наличии у Вас комментариев или вопросов относительно нашей политики конфиденциальности, пожалуйста, отправляйте их на адрес электронной почты: info@lilidiamonds.com, или направляйте письма на адрес:

                            {companyName}
                            Ukrainian manazin, 2133
                            1 name St., Name 52520, Украина
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            <p>Принимаю</p>
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default TermsConditions;