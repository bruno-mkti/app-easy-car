
Rotas - Projeto EasyCar
----------------------------------------


[X] Consultar se existe corrida pendente (hoje) para o usuario logado
    GET -> /rides
    Filtros: passenger_user_id, pickup_date, ride_id, driver_user_id, status

[X] Cadastrar novas caronas
    POST -> /rides

[X] Cancelar um pedido de carona (excluir o pedido)
    DELETE -> /rides/123

[x] Finalizar uma carona que foi concluida
    PUT -> /rides/123/finish
    Body: passenger_user_id

[X] Consultar as corridas para o motorista (corridas dele + corridas pendentes sem motorista)
    GET -> /rides/drivers/456

[X] Consultar todos os dados de uma determinada corrida
    GET -> /rides/123

[X] Motorista aceitar uma carona
    PUT -> /rides/123/accept
    Body: driver_user_id  

[X] Motorista cancelar uma carona
    PUT -> /rides/123/cancel


Business Rules (Regras de Negocio)
----------------------------------------

[X] O usuario so pode pedir uma carona por vez

[X] O motorista só pode aceitar uma carona por vez

