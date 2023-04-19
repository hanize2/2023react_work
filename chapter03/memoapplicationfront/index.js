document.addEventListener('DOMContentLoaded', () => {
    const $button = document.querySelector('button');
    const $ul = document.querySelector('ul');
    const $input = document.querySelector('input');
    const $span = document.querySelector('span');

    const dodelete = (idx,button) => {
        fetch(`http://localhost:5000/delete`, {
            method: 'post',
            body: JSON.stringify({ key: idx }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((result) => result.text())
            .then((data) => { 
                console.log(data);
                console.log(button);
                // 삭제 하고 나서 서버단에 select 다시 해오는걸 했는데
                const deleteli = button.closest('li');
                console.log(deleteli);
                $ul.removeChild(deleteli);
            });
    };

    const doselect = () => {
        fetch(`http://localhost:5000/memos`)
            .then((result) => result.json())
            .then((data) => {
                $ul.textContent = null;
                data.map((memo) => {
                    console.log('memo' + memo);

                    const $li = document.createElement('li');
                    $li.textContent = memo.comm;
                    const $del_btn = document.createElement('button');
                    $del_btn.textContent = '삭제';
                    $del_btn.setAttribute('data-key', memo.idx);
                    $del_btn.addEventListener('click', (e) => {
                        dodelete(e.target.dataset.key,e.target);
                    });
                    $li.appendChild($del_btn);
                    $ul.appendChild($li);
                });
            });
    };

    // 추가 하는 부분
    $button.addEventListener('click', () => {
        if ($input.value.length === 0) {
            $span.textContent = '메모 입력하세요.';
            return;
        }

        const obj = {};
        obj['comm'] = $input.value;

        fetch(`http://localhost:5000/insert`, {
            method: 'post',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((result) => result.text())
            .then((data) => {
                console.log(data);
                const $li = document.createElement('li');
                $li.textContent = $input.value;

                const $del_btn = document.createElement('button');
                $del_btn.textContent = '삭제';
                $del_btn.setAttribute('data-key', data);
                $del_btn.addEventListener('click', (e) => {
                    dodelete(data,e.target);
                });
                $li.appendChild($del_btn);

                $input.value = '';
                doselect();
            });
    });

    doselect();
});
