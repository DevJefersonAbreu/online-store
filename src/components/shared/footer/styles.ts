import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: #1a4b7c;
  color: white;

  .newsletter {
    padding: 40px 10%;
    background: url('/pattern-bg.png') #041e42;
    
    .newsletter-content {
      max-width: 1200px;
      margin: 0 auto;
      
      h2 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 8px;
      }

      p {
        color:  #E6A822;
        margin-bottom: 20px;

        span {
          color:  #FFC300;
        }
      }

      .signup {
        display: flex;
        gap: 10px;
        max-width: 500px;

        input {
          flex: 1;
          padding: 12px 15px;
          border-radius: 4px;
          border: none;
          background: #f5f5f5;
          
          &::placeholder {
            color: #ffbd27;
          }
        }

        button {
          padding: 12px 24px;
          background: #008170;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;

          &:hover {
            background: #006857;
          }
        }
      }
    }
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
    padding: 40px 10%;
    max-width: 1400px;
    margin: 0 auto;
    background-color: #fff;

    h3 {
      font-size: 16px;
      margin-bottom: 20px;
      color: #000;
    }

    a {
      display: block;
      color:  #2B2B2B;
      text-decoration: none;
      margin-bottom: 10px;
      transition: color 0.3s;

      &:hover {
        color: #000;
      }
    }

    .contact-section {
      .logo {
        max-width: 150px;
        margin-bottom: 30px;
      }

      .contact-info {
        margin-bottom: 30px;
        color: #000;

        p {
          color: #2B2B2B;
          margin-bottom: 10px;
          line-height: 1.5;

          strong {
            color: #000;
          }
        }
      }

      .social-icons {
        display: flex;
        gap: 15px;

        a {
          color:  #2B2B2B;
          font-size: 14px;
          
          &:hover {
            color: #008197;
          }
        }
      }
    }

    .install-section {
      p {
        color:  #2B2B2B;
        margin-bottom: 15px;
      }

      .app-buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;

        a {
          border: 1px solid #2B2B2B;
          padding: 8px 15px;
          border-radius: 4px;
          
          &:hover {
            background: rgba(255,255,255,0.1);
          }
        }
      }

      .payment-methods {
        display: flex;
        gap: 10px;

        .payment-icon {
          color:  #2B2B2B;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;

      .social-icons {
        justify-content: center;
      }

      .app-buttons {
        justify-content: center;
      }
    }

    .newsletter {
      .signup {
        flex-direction: column;
      }
    }
  }
`;

