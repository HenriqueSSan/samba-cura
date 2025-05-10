<script lang="ts">
	export const healthArr = [
		{
			list: [
				{
					title: 'Celebre Seu Ritmo e Sua Singularidade',
					description:
						'“No Samba Cura, cada passo é a celebração do seu ritmo único. Venha descobrir que o samba no pé é a maneira perfeita de cuidar do corpo e da alma, sem precisar de treinos complicados. Dance com a gente e sinta a liberdade!”'
				},
				{
					title: 'Movimento que Cura',
					description:
						'“Aqui no Samba Cura, acreditamos que o movimento transforma. Deixe o samba te levar e sinta cada batida como uma oportunidade para se reconectar com seu corpo, mente e espírito. Experimente essa energia curadora!”'
				},

				{
					title: 'Acessibilidade para Todas as Idades',
					description:
						'“Seja qual for sua idade, o Samba Cura te convida a descobrir o prazer de se movimentar de forma simples e descontraída. Nosso método é pensado para todas as mulheres que querem cuidar do corpo sem pressão, apenas se divertindo ao som do samba.”'
				},

				{
					title: 'Transforme Seu Dia com Samba',
					description:
						'“Que tal começar o dia dando um passinho de dança? O Samba Cura é a forma perfeita de combinar prazer, bem-estar e uma pitada de cultura. Desafie-se a sentir a energia positiva do samba e transforme o seu dia!”'
				},

				{
					title: 'Samba: Ritmo, Saúde e Autoamor',
					description:
						'“Mais que uma dança, o samba é um convite ao amor-próprio. No Samba Cura, cada movimento é um passo rumo à saúde física e emocional. Venha redescobrir a beleza de cuidar de si mesma com alegria e ritmo!”'
				}
			]
		},
		{
			list: [
				{
					title: 'Descomplique o Treino',
					description:
						'“Cansada do mesmo cardio monótono? O Samba Cura traz a leveza e a diversão do samba para seu dia a dia. Aqui, você se exercita sorrindo, dançando e se conectando com mulheres que, assim como você, buscam uma alternativa mais vibrante para cuidar do corpo.”'
				},

				{
					title: 'Ritmo e Liberdade',
					description:
						'“Sinta a liberdade de se mover com a cadência do samba. No Samba Cura, cada aula é um convite para deixar as preocupações de lado e se entregar ao prazer de dançar. Permita-se essa pausa transformadora e viva o momento com intensidade!”'
				},

				{
					title: 'Conexão e Comunidade',
					description:
						'“No Samba Cura, você nunca está sozinha. Junte-se a uma comunidade de mulheres que se apoiam, se inspiram e se divertem juntas, enquanto cuidam do corpo de uma forma única e prazerosa. Venha fazer parte dessa dança de empoderamento!”'
				},

				{
					title: 'Samba: Uma Nova Experiência de Bem-Estar',
					description:
						'“Descubra uma nova forma de cuidar de você: sem treinos exaustivos e sem pressão, mas com muita alegria, ritmo e um atendimento pensado especialmente para o seu bem-estar. O Samba Cura é a sua nova maneira de se reconectar com a vida.”'
				},
				{
					title: 'Encontre Sua Paz no Ritmo do Samba',
					description:
						'“Cada aula do Samba Cura é um momento para se cuidar, se inspirar e se libertar. Deixe o ritmo contagiante  te levar'
				}
			]
		}
	];
</script>

<section id="health" class="bg-black py-[96px] text-white">
	<div class="mx-auto max-w-[1280px] px-4 text-center lg:px-0">
		<figure class="inline-block w-[128px] lg:w-auto">
			<img src="/samba-health.svg" alt="" />
		</figure>

		<h2 class="mb-6 text-3xl font-bold text-amber-400 italic lg:text-5xl">"O Samba Cura"</h2>

		<p class="mx-auto mb-[72px] max-w-[710px] text-lg lg:w-[53%] lg:text-2xl">
			A música é contagiante e o movimento com a energia positiva vai curar suas feridas em seu
			corpo e mente.
		</p>

		<div class="[&_figure]:h-auto [&_figure]:lg:w-1/3 [&_figure]:grow">
			<div class="mb-[72px] flex flex-col-reverse items-stretch gap-10 lg:flex-row">
				<ul
					class="flex w-full grow flex-col items-start gap-10 text-left lg:w-1/2 [&_h4]:mb-2 [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:text-amber-400 [&_p]:text-lg [&_p]:leading-[32px]"
				>
					{#each healthArr[0].list as healthItem}
						{@render healthItemSnippet(healthItem.title, healthItem.description)}
					{/each}
				</ul>

				<figure>
					<img class="w-full max-w-full" src="/col-b-2.png" alt="" />
				</figure>
			</div>

			<div class="mb-[72px] flex flex-col-reverse items-stretch gap-10 lg:flex-row-reverse">
				<ul
					class="flex w-full grow flex-col items-start gap-10 text-left lg:w-1/2 [&_h4]:mb-2 [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:text-amber-400 [&_p]:text-lg [&_p]:leading-[32px]"
				>
					{#each healthArr[1].list as healthItem}
						{@render healthItemSnippet(healthItem.title, healthItem.description)}
					{/each}
				</ul>

				<figure>
					<img class="w-full max-w-full" src="/col-b-2.png" alt="" />
				</figure>
			</div>
		</div>
	</div>
</section>

{#snippet healthItemSnippet(title: string, description: string)}
	<li class="space-y-2">
		<h4>{title}</h4>
		<p>{description}</p>
	</li>
{/snippet}
