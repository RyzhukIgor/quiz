import questions from "./utils.js";

export default function Result({ correct }) {
    return (
        <div className="result">
            <img src="https://avatars.mds.yandex.net/i?id=d87cca523716972c42bc78b2028292532b4c7eef-4400724-images-thumbs&n=13"/>
            <h2>
                Вы отгадали {correct} ответа из {questions.length}
            </h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}