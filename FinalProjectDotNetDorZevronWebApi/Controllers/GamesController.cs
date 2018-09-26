using GamesDB;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace FinalProjectDotNetDorZevronWebApi.Controllers
{
    public class GamesController : ApiController
    {
        // GET api/Games
        public HttpResponseMessage Get()
        {
            using (GamesDBEntities entities = new GamesDBEntities())
            {
                return Request.CreateResponse(HttpStatusCode.OK, entities.tblGames.ToList());
            }
        }

        // GET api/Games/5
        public HttpResponseMessage Get(int id)
        {
            using (GamesDBEntities entities = new GamesDBEntities())
            {
                tblGame game = entities.tblGames.FirstOrDefault(g => g.GameID == id);
                if (game != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, game);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format($"Game with ID {id} was not Found"));
                }
            }
        }

        // GET api/Games/{Player}  **path param

        [Route("api/games/byPlayer/{player}")]
        [HttpGet]
        public HttpResponseMessage GetByPlayer(string player)
        {
            using (GamesDBEntities entities = new GamesDBEntities())
            {
                List<tblGame> gameList = entities.tblGames.Where(g => g.Player1.ToLower().StartsWith(player.ToLower()) || g.Player2.ToLower().StartsWith(player.ToLower())).ToList();
                if (gameList.Count > 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, player);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format($"Game with Name {player} was not Found"));
                }
            }
        }

        // GET api/Games?  **query param

        // If there is not default Value in signature in that Function be must specify value in Query string for all signature in Function
        // and if have default Value for all signature in that Function not must specify value in query string 
        // for use query string i need use -- http://localhost:60594/api/games/search?name=football&player1=dor 
        [Route("api/games/search")]
        [HttpGet]
        public HttpResponseMessage GetBySearch(int gameID = 0, string gameName = null, string player1 = null, string player2 = null, string whoWon = null)
        {
            using (GamesDBEntities entities = new GamesDBEntities())
            {
                List<tblGame> gameList = entities.tblGames.Where(g => gameID > 0 ? g.GameID == gameID : true).
                    Where(g => gameName != null ? g.Game_Name.ToLower().StartsWith(gameName.ToLower()): true).
                    Where(g => player1 != null ? g.Player1.ToLower().StartsWith(player1.ToLower()): true).
                    Where(g => player2 != null ? g.Player2.ToLower().StartsWith(player2.ToLower()): true).
                    Where(g => whoWon != null ? g.Who_won.ToLower().StartsWith(whoWon.ToLower()): true )
                    .ToList();
                if (gameList.Count > 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, gameList);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format("game whit this search fild is not found"));
                }
                    
            }
        }
            
        // POST api/Games
        public HttpResponseMessage Post([FromBody]tblGame game)
        {
            using (GamesDBEntities entities = new GamesDBEntities())
            {
                entities.tblGames.Add(game);
                entities.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.Created, new Uri(Request.RequestUri + "/" + game.GameID.ToString()));
            }
        }

        // PUT api/Games/5
        public HttpResponseMessage Put(int id, [FromBody]tblGame game)
        {
            using (GamesDBEntities entities = new GamesDBEntities())
            {
                tblGame game_To_Update = entities.tblGames.FirstOrDefault(g => g.GameID == id); // LINQ - Check if Found ID First or Default
                if (game_To_Update != null)
                {
                    game_To_Update.Game_Name = game.Game_Name;
                    game_To_Update.Player1 = game.Player1;
                    game_To_Update.Player2 = game.Player2;
                    game_To_Update.Who_won = game.Who_won;
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, string.Format($"game with ID {id} Updated"));
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format($"game wite ID {id} not Found"));
                }
            }
        }

        // DELETE api/Games/5
        public HttpResponseMessage Delete(int id)
        {
            using (GamesDBEntities entities = new GamesDBEntities())
            {
                tblGame game = entities.tblGames.FirstOrDefault(g => g.GameID == id);
                if (game != null)
                {
                    entities.tblGames.Remove(game);
                    entities.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Accepted, string.Format($"Game with ID {id} was Deleted"));
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, string.Format($"Game with ID {id} was not Found"));
                }

            }
        }
    }
}
