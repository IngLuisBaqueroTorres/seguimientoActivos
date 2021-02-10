<?php
	define('DB_HOST', "50.62.176.57");
	define("DB_USER", "r4ro39mpqpzl");
	define("DB_PASS", "123456Asdfgh!");
	define("DB_DATABASE","baseclinica");
	define("DB_CHARSET", "utf-8");
	

	class ConexionDB
	{
		protected $_db;

		function __construct()
		{
			$this->_db = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_DATABASE);

			if($this->_db->connect_errno)
			{
				echo "Fallo la conección a Mysql";
				return;
			}	
			$this->_db->set_charset(DB_CHARSET);
		}

		public function convertJSON( $query )
		{
			if ( $result = $this->_db->query( $query ) )
			{
				 if( $result->num_rows > 0 )
				 {
				 		$jsondata["success"] = true;
				 		$jsondata["data"]["message"] = $result->num_rows;
				 		$jsondata["data"]["users"]  =  array();

				 		while ( $row = $result->fetch_object()  ) {
				 				
				 				$jsondata["data"]["users"][] = $row;
				 		}
				 }
				 else
					{
						 $jsondata["success"] = false;
						 $jsondata["data"] =
						  array('message' => $this->_db->error
						  	);

					}
					header("content-type: application/json; charset=utf-8");
					echo json_encode($jsondata, JSON_FORCE_OBJECT );
					$this->_db->close();
			}
			exit();

		}



	}
?>