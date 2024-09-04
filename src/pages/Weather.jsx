import React from "react";
import Input from "../components/UI/Input/Input";
import Section from "../components/UI/Section/section";
import Container from "../components/UI/Container/container";
import Button from "../components/UI/Button/Button";
import style from "./Weather.module.css"

const Weather = () => {
    return (
        <>
            <Section>
                <Container>
                    <Container>
                    <Input Placeholder={"Введите название города"} ClassName={style.weather_input} />
                    <Button ClassName={style.weather_getWeatherbtn} Type="submit">Клик</Button>
                    </Container>
                </Container>
            </Section>
        </>
    )
}

export default Weather