document.addEventListener('DOMContentLoaded', initializeApp);

const questions = [
    { id: 1, text: "¿Como se invierte la rotación en un motor trifásico?", options: [{value: "A", text: "Revertir Polea"}, {value: "B", text: "Cambiar toma corriente."}, {value: "C", text: "Invertir dos (2) de las alimentaciones (R-S-T)"}, {value: "D", text: "No se puede revertir"}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 2, text: "Para confirmar continuidad se usa:", options: [{value: "A", text: "Pinza Amperimétrica"}, {value: "B", text: "Amperímetro"}, {value: "C", text: "Voltímetro"}, {value: "D", text: "Tester"}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 3, text: "La presión en un condensador refrigerado por agua es controlada por:", options: [{value: "A", text: "Bomba de agua"}, {value: "B", text: "Válvula Solenoide"}, {value: "C", text: "Válvula de regulación de caudal de agua"}, {value: "D", text: "Válvula de expansión"}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 4, text: "Para determinar si el compresor está a tierra se debe:", options: [{value: "A", text: "Realizar lectura del voltaje con respecto a la tierra"}, {value: "B", text: "Realizar lectura con pinzas amperimétricas mientras está en funcionamiento"}, {value: "C", text: "Realizar lectura de las terminales R S T con respecto a la tierra"}, {value: "D", text: "Realizar lectura de las terminales RST desconectadas."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 5, text: "Cuando se conectan caños o uniones roscadas se debe:", options: [{value: "A", text: "Apretar bien para prevenir perdidas"}, {value: "B", text: "Aplicar grasa en roscas"}, {value: "C", text: "Envolver con cinta eléctrica"}, {value: "D", text: "Usar cinta de teflón"}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 6, text: "¿Cuál de las siguientes es la mejor definición de sobrecalentamiento?", options: [{value: "A", text: "Diferencia en la temperatura del refrigerante en la entrada y salida del evaporador, a la misma presión."}, {value: "B", text: "Diferencia en la temperatura del refrigerante en la entrada y salida del condensador, a la misma presión."}, {value: "C", text: "Diferencia en la temperatura del aire en la entrada y salida del evaporador, a la misma presión."}, {value: "D", text: "Diferencia en la temperatura del aire en la entrada y salida del condensador, a la misma presión."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 7, text: "El propósito de la válvula termostática de expansión es:", options: [{value: "A", text: "Medir el flujo de aire a través del evaporador."}, {value: "B", text: "Medir el flujo de refrigerante a través del condensador."}, {value: "C", text: "Medir el flujo del refrigerante a través del evaporador."}, {value: "D", text: "Medir el flujo de refrigerante en la salida del evaporador."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 8, text: "¿Cuándo se debe usar un filtro en la línea de aspiración?", options: [{value: "A", text: "Para remover aire del sistema de refrigeración."}, {value: "B", text: "Para remover excesos de aceite en el sistema de refrigeración."}, {value: "C", text: "Cuando el sistema de refrigeración contiene agua y otros contaminantes."}, {value: "D", text: "Para prevenir que se queme el compresor."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 9, text: "Después de que se quemó un compresor, el filtro secador debe cambiarse_____ después del arranque inicial.", options: [{value: "A", text: "1 hora"}, {value: "B", text: "1 semana"}, {value: "C", text: "48 horas"}, {value: "D", text: "2 semanas"}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 10, text: "El propósito del capacitor de arranque es:", options: [{value: "A", text: "Proveer el torque para el arranque."}, {value: "B", text: "Regular el voltaje en el arranque."}, {value: "C", text: "Regular las RPM del motor."}, {value: "D", text: "Regular refrigerante en el arranque."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 11, text: "¿Qué se usa para chequear un capacitor?", options: [{value: "A", text: "Voltímetro."}, {value: "B", text: "Óhmetro."}, {value: "C", text: "Amperímetro."}, {value: "D", text: "Frecuencímetro."}], correctAnswer: "B", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 12, text: "Si se quema un fusible en un circuito, cual podría ser la causa:", options: [{value: "A", text: "Mala conexión."}, {value: "B", text: "Fusible Chico."}, {value: "C", text: "Bajo Voltaje."}, {value: "D", text: "Corto Circuito."}, {value: "E", text: "Todas las anteriores."}], correctAnswer: "E", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 13, text: "Si la presión de trabajo de alta sube, cual podría ser la causa:", options: [{value: "A", text: "Condensador Sucio."}, {value: "B", text: "Sobre carga."}, {value: "C", text: "Aire en el sistema."}, {value: "D", text: "Ventilador del condensador sin funcionar."}, {value: "E", text: "Todas las anteriores."}], correctAnswer: "E", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 14, text: "¿Qué refrigerante tiene una presión de saturación de 475 PSI a 54⁰C?", options: [{value: "A", text: "R-407."}, {value: "B", text: "R-22."}, {value: "C", text: "R-12."}, {value: "D", text: "R-410A."}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 15, text: "¿Si una térmica se resetea y vuelve a saltar cada 5 minutos, que haría?", options: [{value: "A", text: "Remplazar la térmica."}, {value: "B", text: "Revisar si el rango es correcto."}, {value: "C", text: "Revisar la tensión a la cual está sometida."}, {value: "D", text: "Revisar la humedad."}], correctAnswer: "B", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 16, text: "¿Para chequear un fusible desconectado, que usaría?", options: [{value: "A", text: "Óhmetro."}, {value: "B", text: "Voltímetro."}, {value: "C", text: "Amperímetro."}, {value: "D", text: "Vatímetro."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 17, text: "¿Para chequear un fusible conectado, que usaría?", options: [{value: "A", text: "Óhmetro."}, {value: "B", text: "Voltímetro."}, {value: "C", text: "Amperímetro."}, {value: "D", text: "Vatímetro."}], correctAnswer: "B", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 18, text: "El propósito de una bomba de vacío de refrigeración es:", options: [{value: "A", text: "Remover refrigerante del sistema."}, {value: "B", text: "Remover aire y mezcla gaseosa del sistema."}, {value: "C", text: "Remover aceite del sistema."}, {value: "D", text: "Todas las anteriores."}, {value: "E", text: "Ninguna de las anteriores."}], correctAnswer: "B", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 19, text: "Si se obstruye el filtro del aire podría causar:", options: [{value: "A", text: "Congelamiento en el evaporador."}, {value: "B", text: "Reducción de la eficiencia."}, {value: "C", text: "Aumento del consumo eléctrico."}, {value: "D", text: "Todas las anteriores"}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 20, text: "El evaporador está congelado, ¿cuál es la posible causa.?:", options: [{value: "A", text: "Baja carga refrigerante."}, {value: "B", text: "Los elementos descongelantes están quemados."}, {value: "C", text: "El sensor de descongelamiento no funciona"}, {value: "D", text: "Todas las anteriores."}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 21, text: "La presión en un condensador es muy alta, ¿cuál es la posible causa.?:", options: [{value: "A", text: "El condensador está sucio."}, {value: "B", text: "El ventilador del condensador no funciona."}, {value: "C", text: "Sobrecalentamiento alto."}, {value: "D", text: "Ninguna de las anteriores."}, {value: "E", text: "Todas las anteriores."}], correctAnswer: "E", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 22, text: "¿Cuándo se debe remplazar el filtro de líquido?", options: [{value: "A", text: "Cuando el sistema se abra para reparaciones."}, {value: "B", text: "Cuando se note la indicación de humedad."}, {value: "C", text: "48 horas después de un cambio de compresor."}, {value: "D", text: "Todas las anteriores."}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 23, text: "¿Cuándo se debe instalar un filtro en la línea de succión?", options: [{value: "A", text: "Si la unidad no enfría."}, {value: "B", text: "Después de remplazarse el ventilador."}, {value: "C", text: "Cuando se cambia el compresor."}, {value: "D", text: "Todas las anteriores."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 24, text: "¿Cuál es el propósito del mantenimiento preventivo (MP) en un equipo?", options: [{value: "A", text: "Extender la vida de los equipos."}, {value: "B", text: "Operar con eficiencia."}, {value: "C", text: "Reducir emergencias."}, {value: "D", text: "Todas las anteriores"}, {value: "E", text: "Ninguna de las anteriores."}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 25, text: "¿Cuál es el propósito del intercambio de calor en la cámara Cooler?", options: [{value: "A", text: "Aumentar la temperatura del compresor."}, {value: "B", text: "Aumentar la temperatura del condensador."}, {value: "C", text: "Proporcionar subenfriamiento al refrigerante."}, {value: "D", text: "Cambiar aire caliente por frío."}, {value: "E", text: "Todas las anteriores."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 26, text: "Un circuito eléctrico se pone en “ON” e inmediatamente salta la térmica, ¿Cuál es la posible causa?", options: [{value: "A", text: "Cable fundido."}, {value: "B", text: "Circuito abierto."}, {value: "C", text: "Tierra directa de una de las fases."}, {value: "D", text: "Un switch en posición abierta."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 27, text: "Si un motor equipado con un capacitor de marcha no gira con suficiente velocidad, se puede deber a:", options: [{value: "A", text: "Bajo Voltaje."}, {value: "B", text: "Mal capacitor."}, {value: "C", text: "Malos rodamientos del motor."}, {value: "D", text: "Todas las anteriores."}, {value: "E", text: "Ninguna de las anteriores."}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 28, text: "¿Cuál es el refrigerante más común usado para una cámara freezers?", options: [{value: "A", text: "R-12."}, {value: "B", text: "R-22."}, {value: "C", text: "R-404A."}, {value: "D", text: "R-11."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 29, text: "¿Cuál es el medidor de refrigerante comúnmente usado en restaurantes?", options: [{value: "A", text: "Tubo capilar."}, {value: "B", text: "Carburador."}, {value: "C", text: "Válvula termostática."}, {value: "D", text: "Válvula mariposa."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 30, text: "¿Qué es lo primero que haría si encuentra acido en un sistema de refrigeración?", options: [{value: "A", text: "Instalar filtros/secadores de líquido y de aspiración."}, {value: "B", text: "Remplazar el refrigerante."}, {value: "C", text: "Remplazar aceite."}, {value: "D", text: "Remplazar compresor."}, {value: "E", text: "Todas las anteriores."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 31, text: "Si no hay continuidad entre L1 y L2 en el contactor de un equipo, indica que:", options: [{value: "A", text: "La bobina está bien."}, {value: "B", text: "La bobina no está bobinada correctamente."}, {value: "C", text: "La bobina está abierta."}, {value: "D", text: "La bobina no tiene alimentación."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 32, text: "Si el piloto de un calentador de agua a gas se apaga, cual puede ser el problema:", options: [{value: "A", text: "El agua está muy caliente."}, {value: "B", text: "La línea de gas es muy grande."}, {value: "C", text: "La termocupla no funciona bien."}, {value: "D", text: "Mal ajuste del aire."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 33, text: "¿Si se conecta un compresor de 60 Hz en un sistema de 50 Hz, que capacidad perdería?", options: [{value: "A", text: "Ninguna"}, {value: "B", text: "50%"}, {value: "C", text: "28%"}, {value: "D", text: "17%"}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 34, text: "Responda las siguientes preguntas en base al diagrama unifilar que se muestra a continuación: P1 está cerrado. L1 apagada. C1 No está energizado. ¿Qué pasa?", options: [ { value: "A", text: "No hay alimentación. (Térmica mala o abierta). Mala conexión HL (High limit) o abierto." }, { value: "B", text: "Hay alimentación. Correcta conexión HL (High limit) o Cerrado." }, { value: "C", text: "No hay alimentación (Térmica mala o abierta). Correcta conexión HL (High limit) o cerrado." } ], correctAnswer: "A", image_based: true, image_description: "Se refiere al diagrama unifilar donde P1 es un interruptor, L1 una luz, C1 un contactor, HL un límite alto. Estado actual: P1 cerrado, L1 apagada, C1 no energizado.", requires_manual_grading: false },
    { id: 35, text: "Responda las siguientes preguntas en base al diagrama unifilar que se muestra a continuación: P1 está cerrado. HL Cerrado. C1 está energizado. L1 prendida. H1, H2 y H3 no calientan. ¿Cuáles son las posibles fallas?", options: [ { value: "A", text: "OT: Mala conexión; C1: Clavado en posición abierta, C2: Deficiente, H1, H2 y H3 defectuosos." }, { value: "B", text: "OT: Correcta conexión; C1: Clavado en posición cerrada, C2: Deficiente, H1, H2 y H3 defectuosos." }, { value: "C", text: "OT: Mala conexión; C1: Clavado en posición cerrada, C2: Deficiente, H1, H2 y H3 defectuosos." } ], correctAnswer: "A", image_based: true, image_description: "Diagrama unifilar con P1, HL, C1, L1, H1-H3, OT, C2. Estado: P1 cerrado, HL Cerrado, C1 energizado, L1 prendida, H1-H3 no calientan.", requires_manual_grading: false },
    { id: 36, text: "Responda las siguientes preguntas en base al diagrama unifilar que se muestra a continuación: P1 y Hl están cerrados. L1 y L2 están encendidos. H1, H2 y H3 no calientan. ¿Cuáles son las posibles fallas?", options: [ { value: "A", text: "Mala conexión. C1 y C2 defectuosos o clavados abiertos. H1, H2 y H3 defectuosos." }, { value: "B", text: "Mala conexión. C1 y C2 defectuosos o clavados cerrados. H1, H2 y H3 defectuosos." }, { value: "C", text: "C1 y C2 defectuosos o clavados cerrados. H1, H2 y H3 defectuosos." } ], correctAnswer: "A", image_based: true, image_description: "Diagrama unifilar con P1, HL, L1, L2, H1-H3, C1, C2. Estado: P1 y HL cerrados, L1 y L2 encendidos, H1-H3 no calientan.", requires_manual_grading: false },
    { id: 37, text: "Responda las siguientes preguntas en base al diagrama unifilar que se muestra a continuación: P1 y Hl están cerrados y L1 está encendida. L2 esta apagada y H1, H2 y H3 no calientan. ¿Cuáles son las posibles fallas?", options: [ { value: "A", text: "Mala conexión. OT no cierra." }, { value: "B", text: "Mala conexión. C1 y C2 Defectuosos."}, { value: "C", text: "Mala conexión. HL Defectuoso."} ], correctAnswer: "A", image_based: true, image_description: "Diagrama unifilar con P1, HL, L1, L2, H1-H3, OT, C1, C2. Estado: P1 y HL cerrados, L1 encendida, L2 apagada, H1-H3 no calientan.", requires_manual_grading: false },
    { id: 38, text: "Complete el siguiente esquema con la tensión media que corresponde a cada caso:", options: [], correctAnswer: null, image_based: true, image_description: "Visualice el esquema eléctrico proporcionado y determine las tensiones medias. (Esta pregunta requiere revisión manual).", requires_manual_grading: true },
    { id: 39, text: "Realice una conexión en paralelo, Si la fuente es de 220 V y cada lámpara es de 150 W, ¿Qué potencia tiene cada lámpara?:", options: [{value: "A", text: "120 W"}, {value: "B", text: "150 W"}, {value: "C", text: "37,5 W"}, {value: "D", text: "75 W"}], correctAnswer: "B", image_based: true, image_description: "Imagen de referencia: Conexión en paralelo con fuente de 220V y lámparas de 150W.", requires_manual_grading: false },
    { id: 40, text: "Realice una conexión en serie, Si la fuente es de 220 V y cada lámpara es de 150 W, ¿Qué potencia tendrá cada lámpara?:", options: [{value: "A", text: "120 W"}, {value: "B", text: "150 W"}, {value: "C", text: "37,5 W"}, {value: "D", text: "75 W"}], correctAnswer: "C", image_based: true, image_description: "Imagen de referencia: Conexión en serie con fuente de 220V y lámparas de 150W.", requires_manual_grading: false },
    { id: 41, text: "¿Cuántos mA son 2 A.?", options: [{value: "A", text: "2000 mA"}, {value: "B", text: "20mA"}, {value: "C", text: "200mA"}, {value: "D", text: "20000mA"}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 42, text: "La resistencia eléctrica de un conductor, es mayor cuando:", options: [{value: "A", text: "Tiene mas longitud."}, {value: "B", text: "Tiene más sección."}, {value: "C", text: "Es la misma en todos los materiales."}, {value: "D", text: "Tiene más tensión."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 43, text: "¿Que es un conductor eléctrico.?:", options: [{value: "A", text: "Todo material que presenta alta resistencia al paso de la corriente."}, {value: "B", text: "Todo material que presenta poca resistencia al paso de la corriente."}, {value: "C", text: "Todo material que permite transferencia de calor."}, {value: "D", text: "Ninguna de las anteriores."}], correctAnswer: "B", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 44, text: "¿Que es un dieléctrico?:", options: [{value: "A", text: "Todo material que presenta resistencia al paso de la corriente."}, {value: "B", text: "Todo material que presenta poca resistencia al paso de la corriente."}, {value: "C", text: "Un material con alta conductividad."}, {value: "D", text: "Ninguna de las anteriores."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 45, text: "¿Que es un semiconductor?:", options: [{value: "A", text: "Material que permite eventualmente paso de la corriente."}, {value: "B", text: "Material que funciona como dieléctrico."}, {value: "C", text: "Material que presenta una conductividad media."}, {value: "D", text: "Material que se comporta como conductor o aislante dependiendo de diversos factores como por ejemplo la temperatura."}], correctAnswer: "D", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 46, text: "¿Que es la corriente eléctrica y cual es su unidad de medida?:", options: [{value: "A", text: "Es el movimiento de carga por un circuito cerrado, su unidad de medida son los Ampers (A)."}, {value: "B", text: "Es una cantidad de energía que se transmite, su unidad de medida son los Ampers (A)."}, {value: "C", text: "Es el movimiento de carga por un material conductor, su unidad de medida son Vatios (W)."}, {value: "D", text: "Es el movimiento de carga por un circuito cerrado, su unidad de medida son los Vatios (W)."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 47, text: "Existen dos tipos de corrientes, la Corriente__________ y la corriente ____________, la primera se usa por ejemplo en _________ y la segunda se puede encontrar en los__________, Seleccione la respuesta con las palabras que mejor completan esta frase:", options: [{value: "A", text: "Continua (DC), Alterna (AC), Baterías, Toma corientes domiciliarios."}, {value: "B", text: "Eléctrica, Común, Baterías, Electrodomesticos."}, {value: "C", text: "Continua (DC), Alterna (AC), Toma Corrientes Domiciliarios, Baterías."}, {value: "D", text: "Alterna (AC), Continua (DC), Baterías, Toma corrientes domiciliarios."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 48, text: "Es la presión o fuerza que ejerce una fuente de suministro de energía o fuerza electromotriz (FEM) sobre las cargas eléctricas en un circuito cerrado para que se establezca una corriente eléctrica, su unidad es el Volt [V] y se mide con el voltímetro. Esta definición corresponde a:", options: [{value: "A", text: "La tensión."}, {value: "B", text: "La corriente."}, {value: "C", text: "El voltaje."}, {value: "D", text: "La potencia."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false }, // Note: Voltaje is also often used for Tensión. Assuming Tensión is the specific key term.
    { id: 49, text: "Es la oposición que encuentra la corriente a su paso en un circuito cerrado, la fricción entre electrones genera calor por ley de Joule. Su unidad es el Ohm [Ω]. Esta definición corresponde a:", options: [{value: "A", text: "La tensión."}, {value: "B", text: "La Resistencia."}, {value: "C", text: "La potencia."}, {value: "D", text: "El voltaje."}], correctAnswer: "B", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 50, text: "La _______ se define como  los ciclos por segundo que hay entre el valor pico + y el valor pico - . Su unidad es el_______ .En Argentina es de _____, Seleccione la respuesta con las palabras que mejor completan esta frase:", options: [{value: "A", text: "Frecuencia, Hertz (Hz), 50 (Hz) ."}, {value: "B", text: "Frecuencia, Ohms (Ω), 60(Hz)."}, {value: "C", text: "Frecuencia, Hertz (Hz), 60 (Hz)."}, {value: "D", text: "Frecuencia, Ohms (Ω), 50 (Hz)."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 51, text: "La función de una llave termomagnética es:", options: [{value: "A", text: "Proteger al equipo y la instalación ."}, {value: "B", text: "Proteger al usuario."}, {value: "C", text: "Evitar el paso de corriente a las personas."}, {value: "D", text: "Ninguna de las anteriores."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 52, text: "La función de un disyuntor es:", options: [{value: "A", text: "Proteger al equipo y la instalación ."}, {value: "B", text: "Proteger al usuario."}, {value: "C", text: "Evitar el paso de corriente a las personas."}, {value: "D", text: "Ninguna de las anteriores."}], correctAnswer: "B", image_based: false, image_description: null, requires_manual_grading: false }, // Note: C is also a function of a disyuntor (RCD/GFCI type). B is the most general.
    { id: 53, text: "Es un dispositivo de maniobra que se usa para el mando de maquinas de cualquier tipo en que la potencia y la frecuencia plantea exigencias severas. Permite el mando local y a distancia de manera segura y centralizada, esta definición corresponde a:", options: [{value: "A", text: "Contactor ."}, {value: "B", text: "Disyuntor."}, {value: "C", text: "Relevo térmico."}, {value: "D", text: "Ninguna de las anteriores."}], correctAnswer: "A", image_based: false, image_description: null, requires_manual_grading: false },
    { id: 54, text: "Con la regulación correspondiente a la carga, cambia de estado los contactos auxiliares (NC y NO) protegiendo el equipo. Esta es la función de un:", options: [{value: "A", text: "Contactor ."}, {value: "B", text: "Disyuntor."}, {value: "C", text: "Relevo térmico."}, {value: "D", text: "Ninguna de las anteriores."}], correctAnswer: "C", image_based: false, image_description: null, requires_manual_grading: false }
];

let technicianName = '';
let technicianLastName = '';

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = {}; // Using an object to store answers by question ID
let timeRemaining = 120 * 60; // 120 minutes in seconds
let timerInterval;

// DOM Elements
let questionTextEl, optionsListEl, currentQuestionNumberEl, totalQuestionsEl, timerEl;
let prevBtn, nextBtn, submitBtn;
let assessmentContainer, resultsContainer, scoreEl, qualificationEl, imagePlaceholderEl, imageDescriptionEl;
let totalScorableQuestionsEl;
let userInfoForm, techNameInput, techLastNameInput, startExamBtn, resultTechNameEl, detailedQuestionFeedbackEl;

function initializeDomElements() {
    questionTextEl = document.getElementById('question-text');
    optionsListEl = document.getElementById('options-list');
    currentQuestionNumberEl = document.getElementById('current-question-number');
    totalQuestionsEl = document.getElementById('total-questions');
    timerEl = document.getElementById('timer');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    submitBtn = document.getElementById('submit-btn');
    assessmentContainer = document.getElementById('assessment-container');
    resultsContainer = document.getElementById('results-container');
    scoreEl = document.getElementById('score');
    qualificationEl = document.getElementById('qualification');
    imagePlaceholderEl = document.getElementById('question-image-placeholder');
    imageDescriptionEl = document.getElementById('image-description');
    totalScorableQuestionsEl = document.getElementById('total-scorable-questions');

    // New elements for user info and detailed results
    userInfoForm = document.getElementById('user-info-form');
    techNameInput = document.getElementById('tech-name');
    techLastNameInput = document.getElementById('tech-lastname');
    startExamBtn = document.getElementById('start-exam-btn');
    resultTechNameEl = document.getElementById('result-tech-name');
    detailedQuestionFeedbackEl = document.getElementById('detailed-question-feedback');
}

function initializeApp() {
    initializeDomElements();
    if (assessmentContainer) assessmentContainer.style.display = 'none';
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (userInfoForm) userInfoForm.style.display = 'block';

    if (startExamBtn) {
        startExamBtn.addEventListener('click', () => {
            if (techNameInput) technicianName = techNameInput.value.trim();
            if (techLastNameInput) technicianLastName = techLastNameInput.value.trim();

            if (!technicianName || !technicianLastName) {
                alert("Por favor, ingrese su nombre y apellido.");
                return;
            }

            if (userInfoForm) userInfoForm.style.display = 'none';
            if (assessmentContainer) assessmentContainer.style.display = 'block';
            startTestExecution();
        });
    }
}

function startTestExecution() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = {};
    timeRemaining = 120 * 60;

    const scorableQuestions = questions.filter(q => !q.requires_manual_grading).length;
    if (totalQuestionsEl) totalQuestionsEl.textContent = questions.length;
    if (totalScorableQuestionsEl) totalScorableQuestionsEl.textContent = scorableQuestions;

    displayQuestion(currentQuestionIndex);
    startTimer();

    if (prevBtn) prevBtn.addEventListener('click', previousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (submitBtn) submitBtn.addEventListener('click', submitTest);
    if (optionsListEl) optionsListEl.addEventListener('change', handleOptionSelect);
}

function displayQuestion(index) {
    const question = questions[index];
    if (!questionTextEl || !optionsListEl || !currentQuestionNumberEl) {
        console.error("Required DOM elements not found for displaying question.");
        return;
    }

    questionTextEl.textContent = question.text;
    currentQuestionNumberEl.textContent = index + 1;
    optionsListEl.innerHTML = '';

    if (question.image_based && question.image_description) {
        if(imageDescriptionEl) imageDescriptionEl.textContent = question.image_description;
        if(imagePlaceholderEl) imagePlaceholderEl.style.display = 'block';
    } else {
        if(imagePlaceholderEl) imagePlaceholderEl.style.display = 'none';
    }

    question.options.forEach(option => {
        const li = document.createElement('li');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = option.value;
        radio.id = `q${index}_option${option.value}`;

        const label = document.createElement('label');
        label.htmlFor = radio.id;
        label.textContent = option.text;

        li.appendChild(radio);
        li.appendChild(label);
        optionsListEl.appendChild(li);

        if (userAnswers[question.id] === option.value) {
            radio.checked = true;
            li.classList.add('selected');
        }
    });

    optionsListEl.querySelectorAll('li').forEach(li => {
        const radio = li.querySelector('input[type="radio"]');
        if (radio && radio.checked) {
            li.classList.add('selected');
        } else {
            li.classList.remove('selected');
        }
    });

    if(prevBtn) prevBtn.disabled = index === 0;
    if (index === questions.length - 1) {
        if(nextBtn) nextBtn.style.display = 'none';
        if(submitBtn) submitBtn.style.display = 'inline-block';
    } else {
        if(nextBtn) nextBtn.style.display = 'inline-block';
        if(submitBtn) submitBtn.style.display = 'none';
    }
}

function handleOptionSelect(event) {
    if (event.target.type === 'radio') {
        const questionId = questions[currentQuestionIndex].id;
        userAnswers[questionId] = event.target.value;

        optionsListEl.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
        if (event.target.checked) {
            event.target.closest('li').classList.add('selected');
        }
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function submitTest() {
    clearInterval(timerInterval);
    calculateScore();
    displayResults();
    if(assessmentContainer) assessmentContainer.style.display = 'none';
    if(resultsContainer) resultsContainer.style.display = 'block';
}

function calculateScore() {
    score = 0;
    questions.forEach(question => {
        if (!question.requires_manual_grading && userAnswers[question.id] === question.correctAnswer) {
            score++;
        }
    });
}

function getQualification(finalScore) {
    const scorableQuestionsCount = questions.filter(q => !q.requires_manual_grading).length;
    const percentage = scorableQuestionsCount > 0 ? (finalScore / scorableQuestionsCount) * 100 : 0;

    if (percentage < 45) return "Reprobado"; // Menos del 45%
    if (percentage < 65) return "Junior"; // 45% a 64%
    if (percentage < 85) return "Semi Senior"; // 65% a 84%
    return "Senior"; // 85% o más
}

function displayResults() {
    if (resultTechNameEl) {
        resultTechNameEl.textContent = `${technicianName} ${technicianLastName}`;
    }

    const scorableQuestionsCount = questions.filter(q => !q.requires_manual_grading).length;
    if (scoreEl) scoreEl.textContent = `${score} / ${scorableQuestionsCount}`;
    if (qualificationEl) qualificationEl.textContent = getQualification(score);

    if (detailedQuestionFeedbackEl) {
        detailedQuestionFeedbackEl.innerHTML = '<h3>Detalle de Respuestas:</h3>';
        const ul = document.createElement('ul');
        ul.style.listStyleType = 'none';
        ul.style.paddingLeft = '0';

        questions.forEach((question, index) => {
            const li = document.createElement('li');
            li.style.marginBottom = '15px';
            li.style.padding = '10px';
            li.style.border = '1px solid #eee';
            li.style.borderRadius = '4px';

            let indicatorColor = '#888';
            let statusText = 'No respondida';
            const userAnswer = userAnswers[question.id];

            if (question.requires_manual_grading) {
                indicatorColor = '#f0ad4e';
                statusText = 'Revisión manual';
            } else if (userAnswer !== undefined) {
                if (userAnswer === question.correctAnswer) {
                    indicatorColor = '#5cb85c';
                    statusText = 'Correcta';
                } else {
                    indicatorColor = '#d9534f';
                    statusText = 'Incorrecta';
                }
            }

            let questionTextSnippet = question.text.length > 70 ? question.text.substring(0, 70) + "..." : question.text;
            const userAnswerText = userAnswer !== undefined ? (question.options.find(opt => opt.value === userAnswer)?.text || userAnswer) : 'No respondida';
            const correctAnswerText = (!question.requires_manual_grading && question.correctAnswer) ? (question.options.find(opt => opt.value === question.correctAnswer)?.text || question.correctAnswer) : '';

            li.innerHTML = `
                <div style="display: flex; align-items: center; margin-bottom: 5px;">
                    <span style="display: inline-block; width: 20px; height: 20px; border-radius: 50%; background-color: ${indicatorColor}; margin-right: 10px; flex-shrink: 0;"></span>
                    <strong style="margin-right: 5px;">Pregunta ${index + 1}:</strong> ${questionTextSnippet}
                </div>
                <div style="padding-left: 30px; font-size: 0.9em;">
                    Tu respuesta: ${userAnswerText} <br>
                    ${correctAnswerText ? `Respuesta correcta: ${correctAnswerText}` : ''}
                    <em>(${statusText})</em>
                </div>
            `;
            ul.appendChild(li);
        });
        detailedQuestionFeedbackEl.appendChild(ul);
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        if (timerEl) {
             timerEl.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("¡Tiempo agotado!");
            submitTest();
        }
    }, 1000);
}
