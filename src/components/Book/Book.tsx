import React from "react";
import * as S from "./Book.styles";
import { View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Logo from "../../../assets/logoRed.png";
import { IBook } from "./Book.interface";

const Book: React.FC<IBook> = ({ newValue, type, text, ...props }) => {
  return (
    <View>
      {type === "create" ? (
        <S.ContainerTotal {...props}>
          {newValue && newValue > 0 ? (
            <S.New>
              <S.NewValue>{newValue}</S.NewValue>
            </S.New>
          ) : (
            <View></View>
          )}
          <S.Container color="#3A3A3E">
            <S.BorderOne color="#3A3A3E">
              <S.BorderTwo color="#3A3A3E">
                <S.BorderThree color="#3A3A3E">
                  <MaterialIcons name="add" size={32} color="white" />
                </S.BorderThree>
              </S.BorderTwo>
            </S.BorderOne>
          </S.Container>
          <S.Title>{text}</S.Title>
        </S.ContainerTotal>
      ) : type === "new" ? (
        <S.ContainerTotal {...props}>
          {newValue && newValue > 0 ? (
            <S.New>
              <S.NewValue>{newValue}</S.NewValue>
            </S.New>
          ) : (
            <View></View>
          )}
          <S.Container color="#04BF7B">
            <S.BorderOne color="#04BF7B">
              <S.BorderTwo color="#04BF7B">
                <S.BorderThree color="#04BF7B">
                  <MaterialCommunityIcons
                    name="alert-rhombus-outline"
                    size={28}
                    color="white"
                  />
                </S.BorderThree>
              </S.BorderTwo>
            </S.BorderOne>
          </S.Container>
          <S.Title>{text}</S.Title>
        </S.ContainerTotal>
      ) : type === "error" ? (
        <S.ContainerTotal {...props}>
          {newValue && newValue > 0 ? (
            <S.New>
              <S.NewValue>{newValue}</S.NewValue>
            </S.New>
          ) : (
            <View></View>
          )}
          <S.Container color="#FF4341">
            <S.BorderOne color="#FF4341">
              <S.BorderTwo color="#FF4341">
                <S.BorderThree color="#FF4341">
                  <S.Logo source={Logo} />
                </S.BorderThree>
              </S.BorderTwo>
            </S.BorderOne>
          </S.Container>
          <S.Title>{text}</S.Title>
        </S.ContainerTotal>
      ) : (
        <S.ContainerTotal {...props}>
          {newValue && newValue > 0 ? (
            <S.New>
              <S.NewValue>{newValue}</S.NewValue>
            </S.New>
          ) : (
            <View></View>
          )}
          <S.Container color="#09CBDA">
            <S.BorderOne color="#09CBDA">
              <S.BorderTwo color="#09CBDA">
                <S.BorderThree color="#09CBDA">
                  <MaterialCommunityIcons
                    name="alert-box-outline"
                    size={22}
                    color="white"
                  />
                </S.BorderThree>
              </S.BorderTwo>
            </S.BorderOne>
          </S.Container>
          <S.Title>{text}</S.Title>
        </S.ContainerTotal>
      )}
    </View>
  );
};

export default Book;
