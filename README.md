# Андрій Стефурак — психолог

Особистий сайт психолога-консультанта в стилі матриці: https://www.andriistefurak.com

- `index.html` — увесь сайт: стилі, скрипти і тести
- `andrii.jpg` — фото
- `logo.svg`, `favicon.svg` — логотип AS
- `tests/` — сторінки окремих тестів, **генеруються** з `index.html`

## Після кожної зміни `index.html`

```bash
python3 build.py
```

Скрипт оновлює `tests/index.html` (розділ тестів) і `tests/<id>/index.html` (кожен тест зі своєю назвою і прев'ю посилання). Потім `git add -A && git commit && git push`, і Vercel викладе сайт.

## Посилання

- Усі тести: https://www.andriistefurak.com/tests/
- Окремий тест: https://www.andriistefurak.com/tests/phq9/ (`gad7`, `who5`, `rses`, `pcptsd5`, `swls`, `pwi`, `scs`, `bigfive`)

Тексти шкал Бека (BDI-II, BAI) вставляються в блок `ШКАЛИ БЕКА`, тест Бравермана — у блок `ТЕСТ БРАВЕРМАНА` в `index.html`. Поки тексти порожні, ці тести на сайті приховані; після заповнення запусти `python3 build.py`.
