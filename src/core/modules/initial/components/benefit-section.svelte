<script lang="ts">
    export const benefitArr = [
		{
			title: 'Benefícios para seu físicos',
			list: [
				{
					title: 'Melhora da coordenação motora',
					description:
						'O samba exige precisão nos movimentos, ajudando no equilíbrio e na agilidade.'
				},
				{
					title: 'Condicionamento cardiovascular',
					description:
						'O samba exige precisão nos movimentos, ajudando no equilíbrio e na agilidade.'
				},
				{
					title: 'Fortalecimento muscular',
					description: 'Pernas, glúteos e abdômen são trabalhados intensamente.'
				},
				{
					title: 'Melhora da postura',
					description:
						'O samba exige controle do tronco e das pernas, ajudando na consciência corporal.'
				},
				{
					title: 'Queima de calorias',
					description:
						'Dependendo da intensidade, pode ser um excelente exercício para emagrecimento.'
				}
			]
		},
		{
			title: 'Benefícios para seu emocional',
			list: [
				{
					title: 'Redução do Estresse e da Ansiedade',
					description:
						'Dançar samba ajuda a liberar endorfinas, neurotransmissores responsáveis pela sensação de bem-estar, auxiliando na diminuição do estresse e da ansiedade.'
				},
				{
					title: 'Melhora da Autoestima e Autoconfiança',
					description:
						'A prática regular do samba no pé desenvolve novas habilidades motoras e promove a expressão corporal, o que pode aumentar a autoestima e a confiança pessoal.'
				},
				{
					title: 'Estímulo à Expressão Emocional',
					description:
						'O samba permite que os praticantes expressem emoções de forma artística e livre, facilitando o processamento de sentimentos e promovendo o equilíbrio emocional.'
				},
				{
					title: 'Promoção da Socialização',
					description:
						'Participar de aulas de samba no pé proporciona interação social, fortalecendo laços e ampliando a rede de contatos, o que contribui para a sensação de pertencimento e bem-estar emocional.'
				}
			]
		}
	];
</script>

<section class="py-[96px]">
    <div class="mx-auto max-w-[1280px] px-4 lg:px-0">
        <h2 class="mx-auto mb-7 max-w-[710px] text-center text-3xl font-bold lg:w-[43%] lg:text-5xl">
            O que o samba vai trazer para sua vida!
        </h2>
        <p
            class="mx-auto mb-[72px] max-w-[710px] text-center text-lg font-medium lg:w-[43%] lg:text-2xl"
        >
            A música é contagiante e o movimento com a energia positiva tome conta do corpo e a mente.
        </p>

        <ul class="flex w-full flex-col items-start gap-10 lg:flex-row">
            <li class="grow lg:w-1/2">
                <h3 class="mb-10 text-5xl font-bold">{benefitArr[0].title}</h3>

                <ul class="space-y-6">
                    {#each benefitArr[0].list as benefitItem}
                        {@render benefitItemSnippet(benefitItem.title, benefitItem.description)}
                    {/each}
                </ul>
            </li>

            <!-- svelte-ignore element_invalid_self_closing_tag -->
            <div class="hidden h-[256px] w-1 self-center rounded-full bg-amber-400 lg:block" />

            <li class="grow lg:w-1/2">
                <h3 class="mb-10 text-5xl font-bold">{benefitArr[1].title}</h3>

                <ul class="space-y-6">
                    {#each benefitArr[1].list as benefitItem}
                        {@render benefitItemSnippet(benefitItem.title, benefitItem.description)}
                    {/each}
                </ul>
            </li>
        </ul>
    </div>
</section>

{#snippet benefitItemSnippet(title: string, description: string)}
	<li class="flex items-start gap-2">
		<img class="size-[32px] lg:size-[48px]" width="64" height="64" src="/check.svg" alt="" />

		<div class="lg:pt-[6px]">
			<h4 class="mb-2 text-lg font-bold text-amber-400 lg:text-2xl">{title}</h4>
			<p class="text-md leading-[24px] lg:text-xl lg:leading-[32px]">{description}</p>
		</div>
	</li>
{/snippet}