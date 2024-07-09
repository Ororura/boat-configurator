import { FC } from "react";
import { View, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { modelEditingStyles } from "./modelEditingStyles";
import {
  setCruisingRange,
  setDeckConfiguration,
  setDisplacement,
  setGTEType,
  setMainDeckConfiguration,
  setNumberOfSuperstructures,
  setSpeed,
  setTypeOfStarter,
} from "@/shared/slice";
import { useHandlerSet } from "@/features/modelEditing/lib/hooks";
const ModelEditing: FC = () => {
  const { handlerSet } = useHandlerSet();

  return (
    <ScrollView>
      <View style={modelEditingStyles.container}>
        <Text style={{ fontWeight: "bold" }}>Основные характеристики корабля</Text>
        <Text style={modelEditingStyles.text}>Водоизмещени, тонн</Text>
        <Picker<string>
          style={modelEditingStyles.picker}
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setDisplacement);
          }}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="40000 - 60000" value="40000 - 60000" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="60000 - 100000" value="60000 - 100000" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="100000 - 120000" value="100000 - 120000" />
        </Picker>
        <Text style={modelEditingStyles.text}>Тип ГЭУ</Text>
        <Picker<string>
          style={modelEditingStyles.picker}
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setGTEType);
          }}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="Перспективная ГЭУ" value="Perspective GES" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Турбина" value="Turbo" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Дизель" value="Diesel" />
        </Picker>
        <Text style={modelEditingStyles.text}>Скорость хода, уз</Text>
        <Picker<string>
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setSpeed);
          }}
          style={modelEditingStyles.picker}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="До 27 узлов" value="27" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="27-44 узла" value="27-44" />
        </Picker>
        <Text style={modelEditingStyles.text}>Дальность плавания, м.м</Text>
        <Picker<string>
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setCruisingRange);
          }}
          style={modelEditingStyles.picker}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="До 8000 миль" value="8000" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="8000 - 15000 миль" value="8000 - 15000" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Неограничено" value="infinity" />
        </Picker>
        <Text style={{ fontWeight: "bold" }}>Конфигурация палубы и надстройки</Text>
        <Text style={modelEditingStyles.text}>Конфигурация палубы</Text>
        <Picker<string>
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setDeckConfiguration);
          }}
          style={modelEditingStyles.picker}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="Плоская" value="flat" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="С подъемом" value="uplift" />
        </Picker>
        <Text style={modelEditingStyles.text}>Количество надстроек</Text>
        <Picker<string>
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setNumberOfSuperstructures);
          }}
          style={modelEditingStyles.picker}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="Одна" value="one" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Одна с выносным постом" value="One with outpost" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Две надстройки" value="One more" />
        </Picker>
        <Text style={modelEditingStyles.text}>Тип пускателя</Text>
        <Picker<string>
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setTypeOfStarter);
          }}
          style={modelEditingStyles.picker}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="Не применяется" value="none" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Тип 1" value="1" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Тип 2" value="2" />
        </Picker>
        <Text style={modelEditingStyles.text}>Конфигурация основной палубы</Text>
        <Picker<string>
          onValueChange={(itemValue) => {
            handlerSet(itemValue, setMainDeckConfiguration);
          }}
          style={modelEditingStyles.picker}
        >
          <Picker.Item style={modelEditingStyles.pickerItem} label="Угловая" value="corner" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Прямая" value="direct" />
          <Picker.Item style={modelEditingStyles.pickerItem} label="Прямая укороченная" value="Straight short" />
        </Picker>
      </View>
    </ScrollView>
  );
};

export { ModelEditing };
