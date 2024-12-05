import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Container = styled.footer`
  width: 100%;
  background: #1a4b7c;
  color: white;
  animation: ${fadeIn} 0.5s ease-out;

  .newsletter {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, rgba(26, 75, 124, 0.97), rgba(41, 167, 225, 0.97)), url('/pattern-bg.png');
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%);
      animation: rotate 20s linear infinite;
    }
    
    .newsletter-content {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      position: relative;
      z-index: 1;
      
      h2 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        letter-spacing: -0.5px;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }

      p {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 2rem;
        font-size: 1.2rem;
        line-height: 1.6;

        span {
          color: #fff;
          font-weight: 800;
        }
      }

      .signup {
        display: flex;
        gap: 1rem;
        max-width: 500px;
        margin: 0 auto;

        input {
          flex: 1;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          border: 2px solid transparent;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          
          &::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }

          &:focus {
            outline: none;
            border-color: #29a7e1;
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 15px #29a7e1;
          }
        }

        button {
          padding: 1rem 2rem;
          background: #fff;
          color: #29a7e1;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);

          &:hover {
            background: #29a7e1;
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          }

          svg {
            transition: transform 0.3s ease;
          }

          &:hover svg {
            transform: translateX(4px);
          }
        }
      }
    }
  }

  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 4rem;
    padding: 5rem 2rem;
    background-color: #f8f9fa;
    width: 100%;

    > div {
      animation: ${slideUp} 0.5s ease-out forwards;
      opacity: 0;
      animation-delay: calc(var(--animation-order) * 0.1s);
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: #1a4b7c;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.5rem;
        width: 3rem;
        height: 3px;
        background: #29a7e1;
        transition: width 0.3s ease;
      }

      &:hover:after {
        width: 4rem;
      }
    }

    ul {
      list-style: none;
      padding: 0;
    }

    a {
      display: inline-block;
      color: #555;
      text-decoration: none;
      margin-bottom: 0.8rem;
      transition: all 0.3s ease;
      font-size: 1rem;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        left: -20px;
        opacity: 0;
        transition: all 0.3s ease;
      }

      &:hover {
        color: #29a7e1;
        transform: translateX(20px);

        &:before {
          opacity: 1;
          left: -15px;
        }
      }
    }

    .contact-section {
      --animation-order: 1;
      .logo {
        max-width: 150px;
        margin-bottom: 2rem;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }
      }

      .contact-info {
        margin-bottom: 2rem;

        p {
          color: #555;
          margin-bottom: 1rem;
          line-height: 1.6;
          font-size: 0.95rem;

          strong {
            color: #1a4b7c;
            font-weight: 600;
          }
        }
      }

      .social-icons {
        display: flex;
        gap: 1rem;

        a {
          color: #1a4b7c;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e9ecef;
          transition: all 0.3s ease;
          
          &:hover {
            background: #29a7e1;
            color: white;
            transform: translateY(-4px);
            box-shadow: 0 4px 10px rgba(41, 167, 225, 0.3);
          }
        }
      }
    }

    .about-section {
      --animation-order: 2;
    }

    .account-section {
      --animation-order: 3;
    }

    .install-section {
      --animation-order: 4;
      p {
        color: #555;
        margin-bottom: 1rem;
        font-size: 0.95rem;
      }

      .app-buttons {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;

        a {
          img {
            height: 40px;
            transition: all 0.3s ease;
          }

          &:hover img {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
        }
      }

      .payment-methods {
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;

        .payment-icon {
          color: #1a4b7c;
          opacity: 0.8;
          transition: all 0.3s ease;

          &:hover {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .copyright {
    background: #1a4b7c;
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 0.9rem;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    .newsletter {
      padding: 3rem 1.5rem;

      .newsletter-content {
        h2 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1.1rem;
        }
      }

      .signup {
        flex-direction: column;

        button {
          width: 100%;
          justify-content: center;
        }
      }
    }

    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2.5rem;

      h3 {
        &:after {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      .social-icons, .app-buttons, .payment-methods {
        justify-content: center;
      }

      a:hover {
        transform: translateY(-2px);
      }
    }
  }
`;

