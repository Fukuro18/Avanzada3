import { QuizCategory } from '../types/quiz';

export const avanzada3Intro: QuizCategory = {
    id: 'avanzada3_intro',
    title: 'Introducción a PA3',
    description: 'Conceptos fundamentales de Programación Funcional',
    icon: 'BookOpen',
    color: 'blue',
    questions: [
        {
            id: "fp1",
            question: "¿Qué es la Programación Funcional (FP) según el PDF?",
            options: [
                "Un lenguaje de programación específico como Haskell o Scala.",
                "El paradigma opuesto y incompatible con la Programación Orientada a Objetos (POO).",
                "Un conjunto de técnicas que complementan o reemplazan técnicas de otros paradigmas, centradas en funciones como elementos fundamentales.",
                "Un estilo de programación que se enfoca exclusivamente en la mutación de variables."
            ],
            correctAnswer: 2,
            explanation: "La FP es un conjunto de técnicas centradas en funciones que pueden complementar otros paradigmas.",
            type: "single"
        },
        {
            id: "fp2",
            question: "Según el PDF, ¿cuál es la diferencia fundamental entre la Programación Funcional y la Programación Imperativa?",
            options: [
                "La FP usa solo recursión, mientras que la Imperativa usa solo bucles.",
                "La FP se enfoca en 'hacer algo' (mutaciones), mientras que la Imperativa se enfoca en 'ser algo' (expresiones).",
                "La FP se enfoca en 'ser algo' (expresiones que evalúan a un valor), mientras que la Imperativa se enfoca en 'hacer algo' (mutaciones y transiciones de estado).",
                "No hay diferencia significativa; ambos son paradigmas equivalentes."
            ],
            correctAnswer: 2,
            explanation: "La diferencia clave es el enfoque en expresiones (ser algo) vs instrucciones/mutaciones (hacer algo).",
            type: "single"
        },
        {
            id: "fp3",
            question: "En el contexto de la Programación Funcional, ¿qué significa que una función 'es' algo en lugar de 'hace' algo?",
            options: [
                "Que la función debe imprimir su resultado en la consola.",
                "Que la función modifica variables globales como parte de su ejecución.",
                "Que la función es una expresión que evalúa directamente a un valor (por ejemplo, 2 + 3 es 5).",
                "Que la función no puede retornar ningún valor."
            ],
            correctAnswer: 2,
            explanation: "Significa que la función es una expresión que evalúa a un valor, similar a una ecuación matemática.",
            type: "single"
        },
        {
            id: "fp4",
            question: "¿Cuál de las siguientes NO es una característica típica mencionada en el PDF para la Programación Funcional?",
            options: [
                "Funciones de primera clase (first-class functions).",
                "Uso obligatorio de tipos de datos algebraicos.",
                "Funciones anónimas y closures.",
                "Currying y evaluación perezosa (lazy evaluation)."
            ],
            correctAnswer: 1,
            explanation: "El uso obligatorio de tipos de datos algebraicos no se menciona como requisito fundamental en este contexto.",
            type: "single"
        },
        {
            id: "fp5",
            question: "¿Qué se entiende por 'efecto secundario' en Programación Funcional?",
            options: [
                "Cualquier operación matemática dentro de una función.",
                "Cualquier cambio observable fuera del ámbito de la función, como modificar variables, imprimir, escribir en archivos o generar excepciones.",
                "El tiempo de ejecución de una función.",
                "El retorno de un valor por parte de una función."
            ],
            correctAnswer: 1,
            explanation: "Un efecto secundario es cualquier cambio observable fuera del retorno de la función.",
            type: "single"
        },
        {
            id: "fp6",
            question: "Según el PDF, ¿qué afirmación es verdadera sobre los efectos secundarios en la Programación Funcional?",
            options: [
                "Los efectos secundarios son esenciales y deseados en la FP.",
                "La FP busca eliminar completamente todos los efectos secundarios, incluso los inevitables como errores de memoria.",
                "La FP consiste en escribir programas que no contengan efectos secundarios intencionales, minimizando los no intencionados.",
                "Los efectos secundarios son permitidos siempre que sean documentados."
            ],
            correctAnswer: 2,
            explanation: "El objetivo es evitar efectos secundarios intencionales y minimizar los no intencionados.",
            type: "single"
        },
        {
            id: "fp7",
            question: "¿Cuál de los siguientes ejemplos representa un efecto secundario en una función?",
            options: [
                "Una función que toma dos números y retorna su suma.",
                "Una función que toma un número y retorna su cuadrado.",
                "Una función que toma dos números, suma sus valores y luego imprime un mensaje en la consola.",
                "Una función que compara dos números y retorna true o false."
            ],
            correctAnswer: 2,
            explanation: "Imprimir en consola es un cambio observable fuera de la función, por lo tanto, un efecto secundario.",
            type: "single"
        },
        {
            id: "fp8",
            question: "¿Qué es la 'Transparencia Referencial'?",
            options: [
                "La capacidad de una función para ser llamada desde cualquier parte del programa.",
                "La propiedad de una expresión o función de poder ser reemplazada por su valor sin cambiar el comportamiento del programa.",
                "La velocidad con la que una función evalúa su resultado.",
                "La posibilidad de que una función tenga múltiples puntos de retorno."
            ],
            correctAnswer: 1,
            explanation: "La transparencia referencial permite sustituir una expresión por su valor evaluado sin alterar el programa.",
            type: "single"
        },
        {
            id: "fp9",
            question: "Para que una función sea transparente referencialmente, ¿cuál de las siguientes condiciones NO es necesaria?",
            options: [
                "Debe ser determinística (siempre devolver el mismo resultado para los mismos argumentos).",
                "Su resultado debe depender únicamente de sus argumentos.",
                "Debe tener al menos un parámetro de entrada.",
                "No debe generar efectos secundarios observables."
            ],
            correctAnswer: 2,
            explanation: "Una función podría no tener parámetros (constante) y ser transparente referencialmente.",
            type: "single"
        },
        {
            id: "fp10",
            question: "¿Cuál de las siguientes propiedades NO se asocia con una función transparente referencialmente?",
            options: [
                "Es autocontenida y no depende del mundo exterior.",
                "Nunca genera excepciones.",
                "Puede modificar variables globales para optimizar el rendimiento.",
                "No se cuelga debido a recursos externos inaccesibles."
            ],
            correctAnswer: 2,
            explanation: "Modificar variables globales es un efecto secundario, lo cual rompe la transparencia referencial.",
            type: "single"
        },
        {
            id: "fp11",
            question: "¿Qué permite el 'Modelo de Sustitución' en Programación Funcional?",
            options: [
                "Reemplazar cualquier variable por su tipo de dato.",
                "Reemplazar cualquier llamada a una función o expresión transparente referencial por su valor resultante.",
                "Cambiar el orden de ejecución de las instrucciones para mejorar la eficiencia.",
                "Eliminar todas las funciones del código y reemplazarlas por sentencias imperativas."
            ],
            correctAnswer: 1,
            explanation: "El modelo de sustitución permite razonar sobre el código reemplazando expresiones transparentes por sus valores.",
            type: "single"
        },
        {
            id: "fp12",
            question: "En el ejemplo del PDF, ¿por qué la función sumar NO es transparente referencialmente?",
            options: [
                "Porque toma dos parámetros.",
                "Porque utiliza la función mult internamente.",
                "Porque llama a la función log, que imprime un mensaje en la consola (efecto secundario).",
                "Porque retorna un valor entero."
            ],
            correctAnswer: 2,
            explanation: "Imprimir en consola (log) es un efecto secundario, impidiendo la transparencia referencial.",
            type: "single"
        },
        {
            id: "fp13",
            question: "Si una expresión es transparente referencialmente, ¿qué podemos hacer con ella?",
            options: [
                "Ignorarla porque no afecta el programa.",
                "Modificarla para que haga más cosas.",
                "Reemplazarla por su valor sin alterar el comportamiento del programa.",
                "Solo usarla en bucles for."
            ],
            correctAnswer: 2,
            explanation: "Podemos sustituirla por su resultado sin miedo a efectos laterales o cambios de comportamiento.",
            type: "single"
        },
        {
            id: "fp14",
            question: "¿Cuál de los siguientes NO es un beneficio de la Programación Funcional derivado de la transparencia referencial?",
            options: [
                "Facilidad para realizar pruebas unitarias (testeo).",
                "Mayor facilidad para componer funciones.",
                "Mayor uso de memoria RAM.",
                "Seguridad en hilos (thread safety) debido a la inmutabilidad."
            ],
            correctAnswer: 2,
            explanation: "El mayor uso de memoria RAM no es un beneficio.",
            type: "single"
        },
        {
            id: "fp15",
            question: "¿Por qué las funciones puras en FP son fáciles de probar?",
            options: [
                "Porque siempre imprimen mensajes de depuración.",
                "Porque no tienen efectos secundarios y su salida depende solo de sus entradas, lo que hace los tests predecibles.",
                "Porque pueden modificar bases de datos durante las pruebas.",
                "Porque requieren menos líneas de código."
            ],
            correctAnswer: 1,
            explanation: "La ausencia de efectos secundarios y la dependencia exclusiva de los argumentos hacen que las pruebas sean deterministas y sencillas.",
            type: "single"
        },
        {
            id: "fp16",
            question: "¿Qué implica que un programa funcional sea 'modular'?",
            options: [
                "Que está escrito en un solo archivo grande.",
                "Que está compuesto por funciones que toman parámetros y devuelven valores, facilitando su reutilización y composición.",
                "Que utiliza muchos comentarios para explicar su funcionamiento.",
                "Que no puede ser dividido en partes más pequeñas."
            ],
            correctAnswer: 1,
            explanation: "La modularidad se logra mediante funciones pequeñas, reutilizables y componibles.",
            type: "single"
        },
        {
            id: "fp17",
            question: "¿Cuál es la relación entre la transparencia referencial y la seguridad en hilos (thread safety)?",
            options: [
                "Las funciones transparentes referencialmente no modifican datos compartidos, lo que evita problemas de concurrencia.",
                "Las funciones transparentes referencialmente deben usar bloqueos (locks) para ser seguras.",
                "La transparencia referencial no tiene relación con la concurrencia.",
                "Las funciones transparentes referencialmente son más lentas en entornos multihilo."
            ],
            correctAnswer: 0,
            explanation: "La inmutabilidad y falta de efectos secundarios eliminan condiciones de carrera en variables compartidas.",
            type: "single"
        },
        {
            id: "fp18",
            question: "¿Qué significa que una función en FP 'recibe un argumento (uno solo)' según el PDF?",
            options: [
                "Que solo puede tomar un parámetro, y si necesita más, debe usar un objeto.",
                "Que conceptualmente, una función toma un solo argumento, y si necesita múltiples, se logra mediante currying o tuplas.",
                "Que no puede recibir argumentos de tipo string.",
                "Que debe retornar siempre un valor booleano."
            ],
            correctAnswer: 1,
            explanation: "Conceptualmente en cálculo lambda y FP pura, las funciones son unarias; múltiples argumentos se manejan vía currying.",
            type: "single"
        },
        {
            id: "fp19",
            question: "¿Cuál de las siguientes afirmaciones es FALSA respecto a la Programación Funcional según el PDF?",
            options: [
                "No es el lenguaje el que define si se programa funcionalmente, sino la forma en que se escribe el código.",
                "Se puede considerar como lo opuesto al paradigma de Programación Imperativa.",
                "Es imposible escribir funciones que no tengan efectos secundarios visibles en la práctica.",
                "La FP requiere necesariamente usar lenguajes como Haskell o Lisp."
            ],
            correctAnswer: 3,
            explanation: "La FP es un estilo y conjunto de técnicas aplicables en muchos lenguajes, no exclusivo de lenguajes puramente funcionales.",
            type: "single"
        },
        {
            id: "fp20",
            question: "¿Cuál es el objetivo final de aplicar las técnicas de Programación Funcional según el PDF?",
            options: [
                "Hacer que el código sea más largo y difícil de entender.",
                "Escribir programas que no contengan efectos secundarios intencionales, aprovechando los beneficios de la transparencia referencial.",
                "Reemplazar completamente la Programación Orientada a Objetos.",
                "Evitar el uso de funciones en el código."
            ],
            correctAnswer: 1,
            explanation: "El objetivo es escribir software más robusto, predecible y mantenible minimizando efectos secundarios.",
            type: "single"
        }
    ],
};

export const avanzada3Functions: QuizCategory = {
    id: 'avanzada3_functions',
    title: 'Funciones PA3',
    description: 'Preguntas sobre funciones en Programación Avanzada 3',
    icon: 'Code',
    color: 'purple',
    questions: [
        {
            id: "fpa3_1",
            question: "¿Qué define formalmente a una función matemática?",
            options: [
                "Una relación entre dos conjuntos donde cada elemento del dominio tiene un único valor en el codominio.",
                "Una operación que puede generar excepciones deliberadas.",
                "Una relación que modifica variables globales.",
                "Una función que siempre genera efectos secundarios."
            ],
            correctAnswer: 0,
            explanation: "Una función matemática asocia cada elemento del dominio con un único elemento del codominio.",
            type: "single"
        },
        {
            id: "fpa3_2",
            question: "¿Cuál de las siguientes afirmaciones describe mejor una función pura?",
            options: [
                "Puede modificar variables externas.",
                "Siempre produce el mismo resultado para los mismos argumentos.",
                "Genera excepciones deliberadamente.",
                "Depende de variables externas."
            ],
            correctAnswer: 1,
            explanation: "Las funciones puras son deterministas y no tienen efectos secundarios.",
            type: "single"
        },
        {
            id: "fpa3_3",
            question: "¿Qué significa \"curring\" en programación funcional?",
            options: [
                "Dividir una función en múltiples funciones independientes.",
                "Transformar una función de múltiples argumentos en una serie de funciones de un solo argumento.",
                "Componer funciones usando compose().",
                "Modificar el dominio de una función."
            ],
            correctAnswer: 1,
            explanation: "Currying es la técnica de convertir una función de N argumentos en una secuencia de N funciones de un solo argumento.",
            type: "single"
        },
        {
            id: "fpa3_4",
            question: "¿Cuál de las siguientes opciones es un ejemplo de closure?",
            options: [
                "Function<Integer, Integer> add = x -> x + 1;",
                "double taxRate = 0.09; Function<Double, Double> addTax = price -> price + price * taxRate;",
                "int mult(int a, int b) { return a * b; }",
                "List<Integer> append(int i, List<Integer> list);"
            ],
            correctAnswer: 1,
            explanation: "Es un closure porque captura la variable 'taxRate' de su entorno léxico externo.",
            type: "single"
        },
        {
            id: "fpa3_5",
            question: "¿Qué hace el método compose() en Java?",
            options: [
                "Aplica una función antes de otra.",
                "Combina dos funciones en una sola.",
                "Retorna una función inversa.",
                "Convierte una función parcial en total."
            ],
            correctAnswer: 0,
            explanation: "compose() aplica la función argumento primero, y luego la función que llama al método.",
            type: "single"
        },
        {
            id: "fpa3_6",
            question: "¿Qué tipo de función es predecessor(x) = x - 1 cuando se define sobre los enteros positivos?",
            options: [
                "Función total.",
                "Función inversa.",
                "Función parcial.",
                "Función polimórfica."
            ],
            correctAnswer: 2,
            explanation: "Es parcial porque para x=0 (o x=1 si empezamos en 1), el predecesor podría no estar definido en el conjunto de positivos.",
            type: "single"
        },
        {
            id: "fpa3_7",
            question: "¿Cuál de las siguientes afirmaciones es cierta sobre la composición de funciones?",
            options: [
                "La composición de funciones siempre es conmutativa (f ∘ g = g ∘ f).",
                "La composición de funciones no es necesariamente conmutativa.",
                "La composición de funciones solo se aplica a funciones puras.",
                "La composición de funciones requiere funciones con el mismo dominio."
            ],
            correctAnswer: 1,
            explanation: "El orden importa: f(g(x)) no suele ser igual a g(f(x)).",
            type: "single"
        },
        {
            id: "fpa3_8",
            question: "¿Qué interfaz funcional en Java permite trabajar con funciones polimórficas?",
            options: [
                "Consumer<T>",
                "Function<T, U>",
                "Predicate<T>",
                "Supplier<T>"
            ],
            correctAnswer: 1,
            explanation: "Function<T, U> es la interfaz más general para transformar un tipo T en un tipo U.",
            type: "single"
        },
        {
            id: "fpa3_9",
            question: "¿Qué característica debe cumplir un método para ser considerado funcional?",
            options: [
                "Modificar variables externas.",
                "No generar excepciones deliberadas.",
                "Tener acceso a variables globales.",
                "Retornar diferentes valores para los mismos argumentos."
            ],
            correctAnswer: 1,
            explanation: "Las funciones no deben tener efectos secundarios observables como excepciones no controladas deliberadamente para flujo.",
            type: "single"
        },
        {
            id: "fpa3_10",
            question: "¿Qué problema resuelve el curring en programación funcional?",
            options: [
                "Permite llamar a una función con menos parámetros de los que se espera.",
                "Elimina la necesidad de funciones inversas.",
                "Convierte funciones totales en funciones parciales.",
                "Reduce el uso de memoria al eliminar closures."
            ],
            correctAnswer: 0,
            explanation: "Permite la aplicación parcial, creando nuevas funciones con algunos argumentos ya fijados.",
            type: "single"
        },
        {
            id: "fpa3_11",
            question: "¿Cuál de las siguientes afirmaciones es cierta sobre funciones parciales?",
            options: [
                "Están definidas para todos los elementos del dominio.",
                "Introducen errores si no se manejan correctamente.",
                "Son equivalentes a funciones puras.",
                "No pueden ser convertidas en funciones totales."
            ],
            correctAnswer: 1,
            explanation: "Pueden fallar si se invocan con argumentos fuera de su dominio de definición.",
            type: "single"
        },
        {
            id: "fpa3_12",
            question: "¿Qué representa el siguiente código en Java?\nFunction<Integer, Function<Integer, Integer>> add = x -> y -> x + y;",
            options: [
                "Una función que suma dos números directamente.",
                "Una función currificada que suma dos números.",
                "Un closure que captura variables externas.",
                "Una función inversa."
            ],
            correctAnswer: 1,
            explanation: "Es la forma currificada de sumar: toma x y retorna una función que toma y.",
            type: "single"
        },
        {
            id: "fpa3_13",
            question: "¿Qué tipo de función es f(x, y) = x + y en términos de curring?",
            options: [
                "Una función total.",
                "Una función parcial.",
                "Una función currificada.",
                "Una función inversa."
            ],
            correctAnswer: 2,
            explanation: "En el contexto de la pregunta anterior, se busca identificar la forma currificada.",
            type: "single"
        },
        {
            id: "fpa3_14",
            question: "¿Qué ocurre si intentas invocar una función parcial con un valor no definido en su dominio?",
            options: [
                "La función retorna null.",
                "La función genera una excepción.",
                "La función convierte automáticamente el valor al dominio válido.",
                "La función retorna un valor predeterminado."
            ],
            correctAnswer: 1,
            explanation: "Por definición, no puede devolver un valor válido, por lo que suele lanzar una excepción o error.",
            type: "single"
        },
        {
            id: "fpa3_15",
            question: "¿Qué interfaz funcional en Java permite trabajar con funciones de orden superior?",
            options: [
                "BiFunction<T, U, R>",
                "Function<T, U>",
                "UnaryOperator<T>",
                "BinaryOperator<T>"
            ],
            correctAnswer: 0,
            explanation: "BiFunction toma dos argumentos y produce un resultado, útil para operaciones binarias en HOF.",
            type: "single"
        },
        {
            id: "fpa3_16",
            question: "¿Qué es un closure en Java?",
            options: [
                "Una función que no depende de variables externas.",
                "Una función que captura variables de su entorno externo.",
                "Una función que modifica variables globales.",
                "Una función que elimina variables locales."
            ],
            correctAnswer: 1,
            explanation: "Un closure 'encierra' o captura el alcance léxico donde fue definido.",
            type: "single"
        },
        {
            id: "fpa3_17",
            question: "¿Qué problema resuelve el uso de Optional en funciones parciales?",
            options: [
                "Evita el uso de excepciones al retornar valores nulos.",
                "Permite retornar valores opcionales en lugar de nulos.",
                "Elimina la necesidad de funciones inversas.",
                "Convierte funciones parciales en funciones totales."
            ],
            correctAnswer: 1,
            explanation: "Optional modela explícitamente la ausencia de valor, haciendo la función total (siempre retorna un Optional).",
            type: "single"
        },
        {
            id: "fpa3_18",
            question: "¿Qué representa el siguiente código en Java?\nFunction<Integer, Integer> triple = x -> x * 3;\nFunction<Integer, Integer> square = x -> x * x;\nFunction<Integer, Integer> composed = x -> square.apply(triple.apply(x));",
            options: [
                "Una función inversa.",
                "Una composición de funciones.",
                "Un closure.",
                "Una función parcial."
            ],
            correctAnswer: 1,
            explanation: "Es la composición manual de dos funciones: primero triple, luego square.",
            type: "single"
        },
        {
            id: "fpa3_19",
            question: "¿Qué ocurre si modificas una variable capturada por un lambda después de definirlo?",
            options: [
                "El lambda utiliza el valor original de la variable.",
                "El lambda utiliza el valor modificado de la variable.",
                "El código no compila.",
                "El lambda genera una excepción."
            ],
            correctAnswer: 2,
            explanation: "En Java, las variables capturadas por lambdas deben ser final o efectivamente final.",
            type: "single"
        },
        {
            id: "fpa3_20",
            question: "¿Qué tipo de función es addTax(price) en el siguiente código?\ndouble taxRate = 0.09;\nFunction<Double, Double> addTax = price -> price + price * taxRate;",
            options: [
                "Función pura.",
                "Función parcial.",
                "Closure.",
                "Función inversa."
            ],
            correctAnswer: 2,
            explanation: "Es un closure que captura 'taxRate'.",
            type: "single"
        },
        {
            id: "fpa3_21",
            question: "Complete la siguiente afirmación:\nUna función que no está definida para todos los elementos del dominio se denomina __________.",
            options: [],
            correctAnswer: "función parcial",
            explanation: "Es parcial si hay elementos del dominio para los cuales no produce un resultado.",
            type: "text"
        },
        {
            id: "fpa3_22",
            question: "Complete la siguiente afirmación:\nEl proceso de transformar una función que toma múltiples argumentos en una serie de funciones que toman un argumento a la vez se llama __________.",
            options: [],
            correctAnswer: "curring",
            explanation: "Técnica llamada Currying en honor a Haskell Curry.",
            type: "text"
        },
        {
            id: "fpa3_23",
            question: "Complete la siguiente afirmación:\nUna función que captura variables de su entorno externo se denomina __________.",
            options: [],
            correctAnswer: "closure",
            explanation: "Closure o clausura.",
            type: "text"
        },
        {
            id: "fpa3_24",
            question: "Complete la siguiente afirmación:\nLa operación que combina dos funciones f y g, de modo que el resultado de g se pasa como entrada a f, se llama __________ de funciones.",
            options: [],
            correctAnswer: "composición",
            explanation: "Composición funciónal (f o g)(x) = f(g(x)).",
            type: "text"
        },
        {
            id: "fpa3_25",
            question: "Complete la siguiente afirmación:\nUna función que siempre produce el mismo resultado para los mismos argumentos y no tiene efectos secundarios se llama función __________.",
            options: [],
            correctAnswer: "pura",
            explanation: "Definición de pureza en funciones.",
            type: "text"
        }
    ]
};

export const avanzada3Iteraciones: QuizCategory = {
    id: 'avanzada3_iteraciones',
    title: 'Iteraciones PA3',
    description: 'Preguntas sobre iteraciones y colecciones en Programación Avanzada 3',
    icon: 'List',
    color: 'green',
    questions: [
        {
            id: "ipa3_1",
            question: "¿Qué tipo de operación se realiza cuando se transforma cada elemento de una lista en otro tipo de dato?",
            options: [
                "Folding",
                "Mapping",
                "Reducing",
                "Filtering"
            ],
            correctAnswer: 1,
            explanation: "Mapping es la operación que transforma cada elemento de una lista aplicando una función.",
            type: "single"
        },
        {
            id: "ipa3_2",
            question: "¿Cuál es la diferencia entre fold y reduce?",
            options: [
                "fold requiere un valor inicial, mientras que reduce no lo necesita.",
                "reduce puede procesar listas vacías, pero fold no.",
                "fold solo funciona con números, mientras que reduce es genérico.",
                "No hay diferencia; son términos intercambiables."
            ],
            correctAnswer: 0,
            explanation: "fold utiliza un valor inicial (elemento neutro), mientras que reduce opera directamente sobre los elementos de la lista.",
            type: "single"
        },
        {
            id: "ipa3_3",
            question: "¿Qué significa que una lista sea inmutable?",
            options: [
                "Que no se puede modificar su tamaño.",
                "Que no se puede acceder a sus elementos.",
                "Que no se puede modificar directamente; en su lugar, se crea una nueva lista con cambios.",
                "Que solo admite valores numéricos."
            ],
            correctAnswer: 2,
            explanation: "Las listas inmutables no se modifican directamente; cualquier cambio genera una nueva lista.",
            type: "single"
        },
        {
            id: "ipa3_4",
            question: "En el siguiente ejemplo, ¿qué resultado produce la función map?\nList<Integer> ls = List.of(1, 2, 3, 4);\nList<Double> result = map(ls, x -> x * 1.2);",
            options: [
                "[1, 2, 3, 4]",
                "[1.2, 2.4, 3.6, 4.8]",
                "[1.0, 2.0, 3.0, 4.0]",
                "[12, 24, 36, 48]"
            ],
            correctAnswer: 1,
            explanation: "La función map multiplica cada elemento de la lista por 1.2.",
            type: "single"
        },
        {
            id: "ipa3_5",
            question: "¿Qué operación se utiliza para combinar los elementos de una lista en un único resultado?",
            options: [
                "Mapping",
                "Filtering",
                "Folding",
                "Sorting"
            ],
            correctAnswer: 2,
            explanation: "Folding combina los elementos de una lista en un único valor utilizando una operación binaria.",
            type: "single"
        },
        {
            id: "ipa3_6",
            question: "¿Cuál es el resultado de aplicar un foldLeft con la operación de suma a la lista [1, 2, 3, 4] y un valor inicial de 0?",
            options: [
                "10",
                "9",
                "12",
                "8"
            ],
            correctAnswer: 0,
            explanation: "foldLeft suma los elementos: 0 + 1 + 2 + 3 + 4 = 10.",
            type: "single"
        },
        {
            id: "ipa3_7",
            question: "¿Qué interfaz se utiliza para abstraer efectos secundarios en programación funcional?",
            options: [
                "Function<T, U>",
                "Effect<T>",
                "Executable",
                "Consumer<T>"
            ],
            correctAnswer: 1,
            explanation: "La interfaz Effect<T> encapsula acciones como impresiones o efectos secundarios.",
            type: "single"
        },
        {
            id: "ipa3_8",
            question: "¿Qué ocurre si se aplica un foldRight a la lista [1, 2, 3, 4] con la operación de concatenación de cadenas?",
            options: [
                "\"1234\"",
                "\"4321\"",
                "\"1,2,3,4\"",
                "\"4,3,2,1\""
            ],
            correctAnswer: 0,
            explanation: "foldRight procesa la lista de derecha a izquierda, pero la concatenación de cadenas sigue el orden natural (si la operación es append).",
            type: "single"
        },
        {
            id: "ipa3_9",
            question: "¿Qué es una lista corecursiva?",
            options: [
                "Una lista que se construye recursivamente hacia atrás.",
                "Una lista que empieza en un valor conocido y termina en otro valor conocido.",
                "Una lista que solo contiene valores numéricos.",
                "Una lista que no admite iteraciones."
            ],
            correctAnswer: 1,
            explanation: "Las listas corecursivas generan valores aplicando una función desde un valor inicial hasta un valor final.",
            type: "single"
        },
        {
            id: "ipa3_10",
            question: "¿Qué método permite generar una lista de enteros entre dos valores dados?",
            options: [
                "range",
                "map",
                "fold",
                "filter"
            ],
            correctAnswer: 0,
            explanation: "El método range genera una lista de enteros entre un valor inicial (incluido) y un valor final (excluido).",
            type: "single"
        },
        {
            id: "ipa3_11",
            question: "¿Qué tipo de recursión se utiliza para construir una lista corecursiva?",
            options: [
                "Recursión tradicional",
                "Corecursión",
                "Iteración imperativa",
                "Bucle infinito"
            ],
            correctAnswer: 1,
            explanation: "La corecursión construye una lista empezando desde un valor inicial y aplicando una función iterativamente.",
            type: "single"
        },
        {
            id: "ipa3_12",
            question: "¿Qué interfaz se utiliza para representar un efecto ejecutable sin parámetros?",
            options: [
                "Effect<T>",
                "Executable",
                "Function<T, U>",
                "Runnable"
            ],
            correctAnswer: 1,
            explanation: "La interfaz Executable representa un efecto que se puede ejecutar sin necesidad de parámetros.",
            type: "single"
        },
        {
            id: "ipa3_13",
            question: "¿Qué operación se utiliza para eliminar elementos de una lista según una condición específica?",
            options: [
                "Mapping",
                "Filtering",
                "Folding",
                "Reducing"
            ],
            correctAnswer: 1,
            explanation: "Filtering elimina elementos que no cumplen una condición dada.",
            type: "single"
        },
        {
            id: "ipa3_14",
            question: "¿Qué resultado produce el siguiente código?\nList<Integer> ls = List.of(1, 2, 3, 4);\nint sum = foldLeft(ls, 0, (acc, x) -> acc + x);",
            options: [
                "10",
                "12",
                "8",
                "6"
            ],
            correctAnswer: 0,
            explanation: "foldLeft suma los elementos de la lista: 0 + 1 + 2 + 3 + 4 = 10.",
            type: "single"
        },
        {
            id: "ipa3_15",
            question: "¿Qué interfaz se utiliza para abstraer funciones que transforman un tipo de dato en otro?",
            options: [
                "Effect<T>",
                "Function<T, U>",
                "Executable",
                "Consumer<T>"
            ],
            correctAnswer: 1,
            explanation: "Function<T, U> representa una función que toma un valor de tipo T y devuelve un valor de tipo U.",
            type: "single"
        },
        {
            id: "ipa3_16",
            question: "¿Qué ocurre si se aplica un map a una lista vacía?",
            options: [
                "Se lanza una excepción.",
                "Retorna una lista vacía.",
                "Retorna null.",
                "No se puede aplicar map a listas vacías."
            ],
            correctAnswer: 1,
            explanation: "Aplicar map a una lista vacía retorna otra lista vacía.",
            type: "single"
        },
        {
            id: "ipa3_17",
            question: "¿Qué es el 'elemento neutro' en una operación de folding?",
            options: [
                "Un valor que modifica el resultado final.",
                "Un valor que no altera el resultado cuando se aplica la operación.",
                "El primer elemento de la lista.",
                "El último elemento de la lista."
            ],
            correctAnswer: 1,
            explanation: "El elemento neutro es un valor que no afecta el resultado de la operación (por ejemplo, 0 para la suma).",
            type: "single"
        },
        {
            id: "ipa3_18",
            question: "¿Qué resultado produce el siguiente código?\nList<Character> ls = List.of('a', 'b', 'c');\nString result = foldLeft(ls, \"\", (acc, x) -> acc + x);",
            options: [
                "\"abc\"",
                "\"cba\"",
                "\"a,b,c\"",
                "\"c,b,a\""
            ],
            correctAnswer: 0,
            explanation: "foldLeft concatena los caracteres de izquierda a derecha.",
            type: "single"
        },
        {
            id: "ipa3_19",
            question: "¿Qué interfaz se utiliza para encapsular una acción que imprime un valor en consola?",
            options: [
                "Executable",
                "Effect<T>",
                "Function<T, U>",
                "Consumer<T>"
            ],
            correctAnswer: 1,
            explanation: "Effect<T> encapsula acciones como imprimir un valor en consola.",
            type: "single"
        },
        {
            id: "ipa3_20",
            question: "¿Qué método genera una lista de enteros usando una función de incremento personalizada?",
            options: [
                "range",
                "map",
                "generalizedRange",
                "filter"
            ],
            correctAnswer: 2,
            explanation: "generalizedRange permite generar una lista de enteros utilizando una función de incremento definida por el usuario.",
            type: "single"
        },
        // Fill in the blank section
        {
            id: "ipa3_21",
            question: "Completa la siguiente oración:\nEn programación funcional, una lista __________ es aquella que no se modifica directamente; en su lugar, se crea una nueva lista con los cambios aplicados.",
            options: [],
            correctAnswer: "inmutable",
            explanation: "Las estructuras de datos inmutables son fundamentales en PF.",
            type: "text"
        },
        {
            id: "ipa3_22",
            question: "Completa la siguiente oración:\nEl método map se utiliza para __________ cada elemento de una lista aplicando una función específica.",
            options: [],
            correctAnswer: "transformar",
            explanation: "Map transforma o mapea elementos uno a uno.",
            type: "text"
        },
        {
            id: "ipa3_23",
            question: "Completa la siguiente oración:\nEn una operación de folding, el valor inicial se denomina __________ y no altera el resultado cuando se aplica la operación.",
            options: [],
            correctAnswer: "elemento neutro",
            explanation: "El elemento neutro de la operación (e.g. 0 para suma, 1 para producto).",
            type: "text"
        },
        {
            id: "ipa3_24",
            question: "Completa la siguiente oración:\nUna lista __________ es una lista de valores que empieza en un valor conocido y termina en otro valor conocido, construyendo cada elemento aplicando una función al elemento anterior.",
            options: [],
            correctAnswer: "corecursiva",
            explanation: "Definición de generación corecursiva.",
            type: "text"
        },
        {
            id: "ipa3_25",
            question: "Completa la siguiente oración:\nEl método forEach aplica un __________ a cada elemento de una lista sin retornar ningún valor.",
            options: [],
            correctAnswer: "efecto",
            explanation: "ForEach se usa para efectos secundarios.",
            type: "text"
        }
    ]
};
