<div id="plugin-tic-tac-toe">
            <div id="joueur-1" class="rouge">My Name</div>
            <div class="bleu">Player</div>
            <main class="background">
                <section class="title">
                    <h1><strong>Tic-tac-toe</strong></h1>
                </section>

                <table class="table" style="width: 100%">
                    <tr>
                        <th class="t-s"><strong> Joueurs </strong></th>
                        <th class="t-s"><strong> Score </strong></th>
                    </tr>
                    <tr>
                        <td class="jouer"><strong>Joueur X </strong></td>
                        <td class="score" id="player_one_score">
                            <strong>0 </strong>
                        </td>
                    </tr>
                    <tr>
                        <td class="jouer"><strong>Joueur O</strong></td>
                        <td class="score" id="player_two_score">
                            <strong> 0 </strong>
                        </td>
                    </tr>
                </table>

                <section class="display">
                    <strong> Joueur </strong>
                    <span class="display-player player X"
                        ><strong> X </strong></span
                    >
                </section>
                <section class="container">
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                </section>

                <section class="display announcer hide"></section>
                <section class="controls">
                    <button id="reset">Recommencer</button>
                    <button id="reset_score">Remettre score à zero</button>
                </section>
            </main>
        </div>